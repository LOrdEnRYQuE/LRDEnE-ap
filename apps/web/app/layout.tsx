import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ATiQ Editor — AI Code Editor",
    template: "%s | ATiQ Editor",
  },
  description:
    "The AI-powered code editor that understands your codebase. Chat, inline edits, and real-time suggestions — built for professional developers.",
  keywords: ["AI code editor", "AI IDE", "coding assistant", "inline edits", "developer tools"],
  openGraph: {
    title: "ATiQ Editor",
    description: "AI-powered code editor for professional developers",
    type: "website",
    siteName: "ATiQ Editor",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATiQ Editor",
    description: "AI-powered code editor for professional developers",
  },
};

import { AuthProvider } from "../context/AuthContext";
import { Nav } from "./components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
