import { useState, useEffect } from 'react'
import { 
  MessageSquare, 
  Terminal, 
  Code2, 
  Settings, 
  ChevronRight, 
  Sparkles,
  Command,
  Search,
  Layout,
  Menu
} from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState('chat')
  const [version, setVersion] = useState('')
  const [status, setStatus] = useState({ isIndexing: false, count: 0 })
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [chatInput, setChatInput] = useState('')
  const [contextItems, setContextItems] = useState<any[]>([])
  const [showMentions, setShowMentions] = useState(false)
  const [mentionQuery, setMentionQuery] = useState('')
  const [messages, setMessages] = useState<any[]>([])
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    // @ts-ignore
    window.api.getAppVersion().then(setVersion)
    
    // Start indexing
    // @ts-ignore
    window.api.indexProject()

    const interval = setInterval(async () => {
      // @ts-ignore
      const s = await window.api.getStatus()
      setStatus(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (searchQuery.length > 2) {
      // @ts-ignore
      window.api.searchSymbols(searchQuery).then(setResults)
    } else {
      setResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    if (mentionQuery.length > 1) {
      // @ts-ignore
      window.api.searchSymbols(mentionQuery).then(setResults)
    }
  }, [mentionQuery])

  const sendMessage = async () => {
    if (!chatInput.trim() || isStreaming) return

    const userMsg = chatInput.trim()
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setChatInput('')
    setIsStreaming(true)

    try {
      // Gather context code
      const contextCode = await Promise.all(
        contextItems.map(async item => {
          // @ts-ignore
          const content = await window.api.readFile(item.file)
          return `--- FILE: ${item.file} ---\n${content}\n`
        })
      )

      const fullPrompt = `${contextCode.join('\n')}\n\nUSER QUESTION: ${userMsg}`
      
      // Call local API (dev-jwt-placeholder used for simplicity)
      const res = await fetch(`http://localhost:8787/v1/chat/stream?q=${encodeURIComponent(fullPrompt)}`, {
        headers: { 'Authorization': 'Bearer dev-jwt-placeholder' }
      })

      if (!res.body) throw new Error('No body')
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      
      let assistantMsg = ''
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        
        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6)
            if (dataStr === '[DONE]') break
            try {
              const data = JSON.parse(dataStr)
              if (data.delta) {
                assistantMsg += data.delta
                setMessages(prev => {
                  const newMsgs = [...prev]
                  newMsgs[newMsgs.length - 1].content = assistantMsg
                  return newMsgs
                })
              }
            } catch (e) {}
          }
        }
      }
    } catch (err) {
      console.error('Chat error:', err)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: System offline or API unreachable.' }])
    } finally {
      setIsStreaming(false)
      setContextItems([])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    setChatInput(val)

    const mentionMatch = val.match(/@([a-zA-Z0-9_$]*)$/)
    if (mentionMatch) {
      setShowMentions(true)
      setMentionQuery(mentionMatch[1])
    } else {
      setShowMentions(false)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const addContextItem = (item: any) => {
    if (!contextItems.find(c => c.name === item.name)) {
      setContextItems([...contextItems, item])
    }
    setChatInput(chatInput.trim().replace(/@[a-zA-Z0-9_$]*$/, ''))
    setShowMentions(false)
  }

  const removeContextItem = (name: string) => {
    setContextItems(contextItems.filter(c => c.name !== name))
  }

  return (
    <div className="flex h-screen bg-[#050505] text-[#e0e0e0] font-sans">
      {/* ── Sidebar (Icon Menu) ── */}
      <aside className="w-14 flex flex-col items-center py-6 border-r border-[#1a1a1a] bg-[#0a0a0a] space-y-8 select-none">
        <div className="text-blue-500 mb-4 scale-110">
          <Code2 size={24} />
        </div>
        
        <nav className="flex flex-col space-y-6">
          <button 
            onClick={() => setActiveTab('explore')}
            className={`p-2 rounded-lg transition-all ${activeTab === 'explore' ? 'text-blue-400 bg-blue-500/10' : 'text-[#555] hover:text-[#888]'}`}
          >
            <Layout size={20} />
          </button>
          <button 
            onClick={() => setActiveTab('search')}
            className={`p-2 rounded-lg transition-all ${activeTab === 'search' ? 'text-blue-400 bg-blue-500/10' : 'text-[#555] hover:text-[#888]'}`}
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setActiveTab('chat')}
            className={`p-2 rounded-lg transition-all ${activeTab === 'chat' ? 'text-blue-400 bg-blue-500/10' : 'text-[#555] hover:text-[#888]'}`}
          >
            <MessageSquare size={20} />
          </button>
          <button 
            className={`p-2 rounded-lg transition-all text-[#555] hover:text-[#888]`}
          >
            <Terminal size={20} />
          </button>
        </nav>

        <div className="mt-auto flex flex-col space-y-6">
          <div className="flex flex-col items-center space-y-1">
            <div className={`w-1.5 h-1.5 rounded-full ${status.isIndexing ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
            <span className="text-[8px] text-[#444] font-mono">{status.count}</span>
          </div>
          <button className="p-2 text-[#555] hover:text-[#888]">
            <Settings size={20} />
          </button>
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* ── Context Panel (Dynamic) ── */}
        <section className="w-[400px] border-r border-[#1a1a1a] flex flex-col bg-[#080808]">
          <header className="h-12 border-bottom border-[#1a1a1a] flex items-center px-4 justify-between bg-[#0a0a0a]/50 backdrop-blur">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#666]">
              {activeTab === 'search' ? 'Global Search' : 'Chat'}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] text-[#444] px-1.5 py-0.5 rounded border border-[#222]">v{version}</span>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto">
            {activeTab === 'search' ? (
              <div className="p-4 space-y-6">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-3 text-[#444]" />
                  <input 
                    autoFocus
                    placeholder="Search symbols, types, or files..."
                    className="w-full bg-[#111] border border-[#222] rounded-lg py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-500/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  {results.slice(0, 15).map((res, i) => (
                    <button 
                      key={i}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-blue-500/5 group border border-transparent hover:border-blue-500/20 transition-all font-mono"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-blue-300 group-hover:text-blue-400">{res.name}</span>
                        <span className="text-[10px] uppercase tracking-tighter text-[#444] bg-[#111] px-1 rounded">{res.type}</span>
                      </div>
                      <div className="text-[11px] text-[#555] truncate">
                        {res.file.split('lrdene-app/')[1] || res.file}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex-1 overflow-y-auto space-y-6 pb-10">
                  {messages.length === 0 ? (
                    <div className="flex space-x-3 max-w-[90%]">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Sparkles size={16} />
                      </div>
                      <div className="bg-[#121212] p-3 rounded-2xl rounded-tl-none border border-[#1a1a1a]">
                        <p className="text-sm leading-relaxed text-[#aaa]">
                          Welcome to ATiQ Desktop. Use <b>@symbol</b> to mention code context. I've indexed {status.count} symbols from your repo.
                        </p>
                      </div>
                    </div>
                  ) : (
                    messages.map((m, i) => (
                      <div key={i} className={`flex space-x-3 max-w-[95%] ${m.role === 'user' ? 'ml-auto justify-end' : ''}`}>
                        {m.role === 'assistant' && (
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                            <Code2 size={16} />
                          </div>
                        )}
                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                          m.role === 'user' 
                          ? 'bg-blue-600/10 text-blue-200 rounded-tr-none border border-blue-500/20 italic' 
                          : 'bg-[#121212] border border-[#1a1a1a] rounded-tl-none whitespace-pre-wrap'
                        }`}>
                          {m.content || (isStreaming && i === messages.length - 1 ? '...' : '')}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <footer className="p-4 bg-[#0a0a0a]/80 border-t border-[#1a1a1a] relative">
            {/* Context Pills */}
            {contextItems.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3 px-1">
                {contextItems.map(item => (
                  <div key={item.name} className="flex items-center bg-blue-500/10 text-blue-300 px-2 py-1 rounded text-[10px] border border-blue-500/20">
                    <span className="mr-1 opacity-50">{item.type}</span>
                    <b className="font-mono">{item.name}</b>
                    <button 
                      onClick={() => removeContextItem(item.name)}
                      className="ml-2 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Mention Suggestions */}
            {showMentions && results.length > 0 && (
              <div className="absolute bottom-full left-4 right-4 bg-[#111] border border-[#222] rounded-t-xl shadow-2xl overflow-hidden -mb-px z-50">
                <div className="max-h-48 overflow-y-auto">
                  {results.slice(0, 8).map((res, i) => (
                    <button 
                      key={i}
                      onClick={() => addContextItem(res)}
                      className="w-full text-left p-2.5 hover:bg-blue-600/10 flex items-center justify-between border-b border-[#1a1a1a] last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-[10px] text-[#555] font-mono w-12">{res.type}</span>
                        <span className="text-sm font-mono text-blue-300">{res.name}</span>
                      </div>
                      <span className="text-[10px] text-[#444]">{res.file.split('/').pop()}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative group">
              <textarea 
                placeholder={activeTab === 'search' ? "Filter results..." : "Ask anything... (use @ for symbols)"}
                className="w-full bg-[#111] border border-[#222] rounded-xl p-3 size-12 min-h-24 outline-none text-sm focus:border-blue-500/50 transition-colors pr-12 resize-none"
                value={chatInput}
                onChange={handleInputChange}
                onKeyDown={onKeyDown}
              />
              <button 
                onClick={sendMessage}
                disabled={isStreaming}
                className="absolute right-3 bottom-3 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-[#444]">
              <div className="flex items-center space-x-1.5">
                <span className="px-1 border border-[#222] rounded">Shift + Enter</span>
                <span>for new line</span>
              </div>
              <span>GPT-4o Mini</span>
            </div>
          </footer>
        </section>

        {/* ── Code Editor View (Mock) ── */}
        <section className="flex-1 flex flex-col relative group">
          <header className="h-10 border-b border-[#1a1a1a] bg-[#050505] flex items-center px-4 space-x-4">
            <div className="flex items-center space-x-2 text-xs text-[#aaa]">
              <div className="w-3 h-3 text-blue-400"><Code2 size={12}/></div>
              <span>apps/desktop/src/App.tsx</span>
            </div>
          </header>
          
          <div className="flex-1 p-6 font-mono text-[13px] leading-relaxed relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-80 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 bg-[#050505]/95 z-[-1]"></div>
            <p className="text-blue-400">export default function <span className="text-yellow-200">App</span>() {'{'}</p>
            <p className="pl-4 text-[#888]">const [activeTab, setActiveTab] = useState('chat')</p>
            <p className="pl-4 text-[#888]">return (</p>
            <p className="pl-8 text-purple-400">{'<'}<span className="text-blue-300">div</span> <span className="text-green-300">className</span>="flex h-screen bg-[#050505]" {'>'}</p>
            <p className="pl-12 text-[#666]">{'<!-- Desktop UI implementation -->'}</p>
            <p className="pl-8 text-purple-400">{'</'}<span className="text-blue-300">div</span>{'>'}</p>
            <p className="pl-4 text-white">);</p>
            <p className="text-blue-400">{'}'}</p>
            
            {/* Feature highlight orbs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full"></div>
          </div>

          <div className="absolute bottom-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-[#1a1a1a] hover:bg-[#252525] text-xs px-3 py-1.5 rounded-lg border border-[#333] transition-colors">
              Compare
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-xs px-3 py-1.5 rounded-lg text-white transition-colors">
              Accept Edits
            </button>
          </div>
        </section>

      </main>
    </div>
  )
}
