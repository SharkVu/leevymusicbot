import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "LeeVy Music Bot - Your Discord Music Companion",
  description:
    "Experience premium music streaming in Discord with LeeVy Music Bot. High-quality audio, easy controls, and endless entertainment.",
  generator: "v0.app",
  keywords: "Discord bot, music bot, Discord music, LeeVy, streaming, audio",
  authors: [{ name: "LeeVy Music Bot" }],
  icons: {
    icon: "/leevy-avatar.png",
    shortcut: "/leevy-avatar.png",
    apple: "/leevy-avatar.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
