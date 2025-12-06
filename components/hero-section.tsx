"use client"

import { ArrowRight, Zap, Shield, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400">
            <Zap className="w-4 h-4" />
            <span>Advanced Security & AI Solutions</span>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty leading-tight">
              Cybersecurity & AI
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Expert
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Protecting digital infrastructure and leveraging artificial intelligence to solve tomorrow&apos;s security
              challenges today.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
              <Link href="#projects">
                Explore My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
              <Link href="#newsletter">Subscribe to Updates</Link>
            </Button>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16">
            <div className="space-y-3 p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-blue-400 mx-auto" />
              <h3 className="font-semibold">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security architecture and threat mitigation
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <Brain className="w-8 h-8 text-purple-400 mx-auto" />
              <h3 className="font-semibold">AI & Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Intelligent solutions for complex security challenges</p>
            </div>
            <div className="space-y-3 p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-cyan-400 mx-auto" />
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-sm text-muted-foreground">Cutting-edge technology and forward-thinking strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
