"use client"

import type { Subscriber } from "@/lib/types"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Mail, Calendar, Loader2, Search } from "lucide-react"
import { toast } from "sonner"

export function SubscribersTable() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    loadSubscribers()
  }, [])

  const loadSubscribers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/admin/subscribers")
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to load subscribers")
      }

      setSubscribers(data.data || [])
    } catch (error) {
      toast.error("Failed to load subscribers")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this subscriber?")) return

    setDeletingId(id)
    try {
      const response = await fetch("/api/admin/subscribers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error("Failed to delete")
      }

      setSubscribers(subscribers.filter((s) => s.id !== id))
      toast.success("Subscriber deleted")
    } catch (error) {
      toast.error("Failed to delete subscriber")
    } finally {
      setDeletingId(null)
    }
  }

  const filteredSubscribers = subscribers.filter(
    (s) =>
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by email or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-background/50 border-border/50"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-border/50 bg-card/30">
          <p className="text-sm text-muted-foreground mb-1">Total Subscribers</p>
          <p className="text-3xl font-bold">{subscribers.length}</p>
        </div>
        <div className="p-4 rounded-lg border border-border/50 bg-card/30">
          <p className="text-sm text-muted-foreground mb-1">This Month</p>
          <p className="text-3xl font-bold">
            {
              subscribers.filter((s) => {
                const date = new Date(s.created_at)
                const now = new Date()
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
              }).length
            }
          </p>
        </div>
        <div className="p-4 rounded-lg border border-border/50 bg-card/30">
          <p className="text-sm text-muted-foreground mb-1">Today</p>
          <p className="text-3xl font-bold">
            {
              subscribers.filter((s) => {
                const date = new Date(s.created_at).toDateString()
                return date === new Date().toDateString()
              }).length
            }
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
        {filteredSubscribers.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>{searchTerm ? "No subscribers found matching your search" : "No subscribers yet"}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border/50 bg-background/50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Email</th>
                  <th className="px-6 py-3 text-left font-semibold">Name</th>
                  <th className="px-6 py-3 text-left font-semibold">Subscribed</th>
                  <th className="px-6 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-b border-border/30 hover:bg-background/20 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <code className="text-xs bg-background/50 px-2 py-1 rounded text-blue-400">
                          {subscriber.email}
                        </code>
                      </div>
                    </td>
                    <td className="px-6 py-4">{subscriber.name || "-"}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(subscriber.created_at).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(subscriber.id)}
                        disabled={deletingId === subscriber.id}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        {deletingId === subscriber.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
