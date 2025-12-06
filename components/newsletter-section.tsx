"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || "Failed to subscribe")
        return
      }

      setIsSubscribed(true)
      setEmail("")
      setName("")
      toast.success("Successfully subscribed to newsletter!")

      // Reset form after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <section
        id="newsletter"
        className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-t border-border/40"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
          <p className="text-muted-foreground">
            You&apos;ve successfully subscribed. Check your email for confirmation.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="newsletter"
      className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-t border-border/40"
    >
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
              <Mail className="w-3 h-3" />
              <span>Stay Updated</span>
            </div>
            <h2 className="text-4xl font-bold">Get the Latest Insights</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Subscribe to receive my latest articles on cybersecurity, AI advancements, and tech trends delivered to
              your inbox.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-blue-500/50"
              />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-blue-500/50"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
