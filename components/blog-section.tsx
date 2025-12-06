import { ArrowRight, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400">
            <span>Latest Articles</span>
          </div>
          <h2 className="text-4xl font-bold">Security & AI Insights</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore in-depth articles on cybersecurity, artificial intelligence, and technology trends shaping the
            digital landscape.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16 rounded-xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-border/80 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime} min read</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="w-fit text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-0">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden hover:border-border/80 transition-colors group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-border/50 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="bg-transparent" size="lg">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
