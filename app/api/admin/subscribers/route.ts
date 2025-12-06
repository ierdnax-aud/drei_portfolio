import { getSubscribers, deleteSubscriber } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

// GET all subscribers
export async function GET(req: NextRequest) {
  try {
    // In production, verify admin authentication here
    const subscribers = await getSubscribers()
    return NextResponse.json({ success: true, data: subscribers })
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 })
  }
}

// DELETE a subscriber
export async function DELETE(req: NextRequest) {
  try {
    // In production, verify admin authentication here
    const { id } = await req.json()

    if (!id) {
      return NextResponse.json({ error: "Subscriber ID required" }, { status: 400 })
    }

    await deleteSubscriber(id)
    return NextResponse.json({ success: true, message: "Subscriber deleted" })
  } catch (error) {
    console.error("Error deleting subscriber:", error)
    return NextResponse.json({ error: "Failed to delete subscriber" }, { status: 500 })
  }
}
