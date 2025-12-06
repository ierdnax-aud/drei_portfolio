import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Admin Dashboard - Portfolio",
  description: "Manage newsletter subscribers and admin settings",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
      <Analytics />
    </html>
  )
}
