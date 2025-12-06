"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { AdminLoginModal } from "@/components/admin-login-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg" />
              <span>Portfolio</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
                About
              </Link>
              <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition">
                Blog
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition">
                Projects
              </Link>
              <Link href="#newsletter" className="text-sm text-muted-foreground hover:text-foreground transition">
                Newsletter
              </Link>
            </div>

            {/* Admin login button */}
            <div className="hidden md:flex items-center gap-3">
              <Button size="sm" variant="outline" onClick={() => setIsLoginOpen(true)} className="bg-transparent">
                Admin Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-accent rounded-lg">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 space-y-3 pb-4 border-t border-border/40">
              <Link
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#blog"
                className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#newsletter"
                className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
                onClick={() => setIsOpen(false)}
              >
                Newsletter
              </Link>
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setIsLoginOpen(true)
                  setIsOpen(false)
                }}
              >
                Admin Login
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Admin Login Modal */}
      <AdminLoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}
