import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BlogSection />
      <NewsletterSection />
    </main>
  )
}
