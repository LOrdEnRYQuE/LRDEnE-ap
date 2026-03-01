import type { Metadata } from "next";
import { createClient } from "@atiq/sdk";
import type { TeamStatsResponse, TeamResponse, AuditLogResponse } from "@atiq/shared";

export const metadata: Metadata = {
  title: "Team Dashboard",
  description: "Monitor organizational AI usage and manage team members.",
};

async function getTeamData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";
  const token = "dev-pro"; // Placeholder

  try {
    const client = createClient({ apiUrl, token });
    const teams = await client.team.list();
    if (teams.length === 0) return null;
    
    // For MVP, just get stats for the first team
    const teamId = teams[0].id;
    const [stats, auditLogs] = await Promise.all([
      client.team.getStats(teamId),
      client.team.getAuditLogs(teamId, 10)
    ]);
    
    return { team: teams[0], stats, auditLogs };
  } catch (err) {
    console.error("Team SDK Error:", err);
    return null;
  }
}

export default async function TeamDashboard() {
  const data = await getTeamData();

  if (!data) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: "center", padding: "100px 0" }}>
          <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "2rem", marginBottom: 16 }}>Team Access Required</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: 32 }}>
            You are not part of any teams. Upgrade to a Team plan to manage organizations.
          </p>
          <a href="/pricing" className="btn btn-primary">View Plans</a>
        </div>
      </main>
    );
  }

  const { team, stats, auditLogs } = data;

  return (
    <main className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, borderBottom: "1px solid var(--border)", paddingBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
              {team.name}
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>Organization Overview & Intelligence Dashboard</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <span className="badge" style={{ color: "var(--accent-neon)", borderColor: "var(--accent-neon)" }}>Team Plan</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32 }}>
          {/* Main Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            
            {/* Usage Summary Header */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              <TeamStat label="Total Tokens Used" value={stats.totalTokens.toLocaleString()} trend="+12% vs last month" />
              <TeamStat label="Active Seats" value={stats.userCount.toString()} subtext="out of 10 limit" />
              <TeamStat label="Avg Tokens / User" value={Math.round(stats.totalTokens / (stats.userCount || 1)).toLocaleString()} />
            </div>

            {/* Activity Feed (Audit Logs) */}
            <div className="card">
              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, marginBottom: 20 }}>
                Organization Activity
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {auditLogs.length > 0 ? auditLogs.map((log: AuditLogResponse, i: number) => (
                  <div key={log.id} style={{ 
                    display: "flex", 
                    gap: 16,
                    padding: "12px 0",
                    borderBottom: i === auditLogs.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)"
                  }}>
                    <div style={{ width: 120, fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {new Date(log.createdAt).toLocaleDateString()}
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontWeight: 600 }}>{log.user.email}</span>
                      <span style={{ color: "var(--text-secondary)" }}> performed </span>
                      <span style={{ color: "var(--accent)", fontWeight: 500 }}>{log.action.replace("_", " ")}</span>
                      {log.metadata?.invitedEmail && (
                        <span style={{ color: "var(--text-muted)" }}> to {log.metadata.invitedEmail}</span>
                      )}
                    </div>
                  </div>
                )) : (
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>No recent activity.</p>
                )}
              </div>
            </div>

            {/* User Breakdown */}
            <div className="card">
              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, marginBottom: 20 }}>
                Usage by Member
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {stats.usage.byUser.map((user: any, i: number) => (
                  <div key={user.email} style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    padding: "16px 0",
                    borderBottom: i === stats.usage.byUser.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)"
                  }}>
                    <div>
                      <div style={{ fontWeight: 500 }}>{user.email}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{user.chatCount} AI interactions</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", fontWeight: 600 }}>
                        {user.tokens.toLocaleString()}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {((user.tokens / (stats.totalTokens || 1)) * 100).toFixed(1)}% of total
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Model Distribution */}
            <div className="card">
              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 16 }}>
                Model Mix
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {Object.entries(stats.usage.byModel).map(([model, tokens]: [string, any]) => (
                  <div key={model}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: 6 }}>
                      <span style={{ color: "var(--text-secondary)" }}>{model}</span>
                      <span style={{ fontWeight: 600 }}>{Math.round((tokens / (stats.totalTokens || 1)) * 100)}%</span>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ 
                        height: "100%", 
                        width: `${(tokens / (stats.totalTokens || 1)) * 100}%`, 
                        background: model.includes("claude") ? "var(--accent-amber)" : "var(--accent)"
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ background: "linear-gradient(to bottom right, rgba(0,255,255,0.05), transparent)" }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: 8 }}>Admin Controls</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li><a href="#" style={{ fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none" }}>→ Modify Seats</a></li>
                <li><a href="#" style={{ fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none" }}>→ Export CSV Data</a></li>
                <li><a href="#" style={{ fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none" }}>→ Configure SSO</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TeamStat({ label, value, subtext, trend }: { label: string; value: string; subtext?: string; trend?: string }) {
  return (
    <div className="card" style={{ padding: "20px" }}>
      <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)" }}>
          {value}
        </div>
        {subtext && <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{subtext}</span>}
      </div>
      {trend && (
        <div style={{ fontSize: "0.75rem", color: "var(--accent-green)", marginTop: 8 }}>
          {trend}
        </div>
      )}
    </div>
  );
}
