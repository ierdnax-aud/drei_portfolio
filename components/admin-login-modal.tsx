"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, LogIn, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface AdminLoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdminLoginModal({ isOpen, onClose }: AdminLoginModalProps) {
  const [email, setEmail] = useState("admin@example.com")
  const [password, setPassword] = useState("admin123")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (email === "admin@example.com" && password === "admin123") {
        localStorage.setItem("adminSession", "true")
        onClose()
        router.push("/admin")
      } else {
        setError("Invalid credentials. Use demo credentials: admin@example.com / admin123")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = () => {
    localStorage.setItem("adminSession", "true")
    onClose()
    router.push("/admin")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border/50 rounded-lg max-w-md w-full space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Admin Login</h2>
          <button onClick={onClose} className="p-1 hover:bg-background rounded-lg transition" aria-label="Close dialog">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-2 items-start">
          <AlertCircle className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
          <p className="text-xs text-blue-300">Demo mode active. Use demo credentials to access the admin dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-card text-muted-foreground">OR</span>
          </div>
        </div>

        <Button onClick={handleDemoLogin} className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
          <LogIn className="w-4 h-4" />
          Quick Demo Access
        </Button>

        <p className="text-xs text-center text-muted-foreground">Demo credentials: admin@example.com / admin123</p>
      </div>
    </div>
  )
}
