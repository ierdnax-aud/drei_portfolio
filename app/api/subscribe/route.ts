import { addSubscriber } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Add subscriber to database
    const subscriber = await addSubscriber(email, name)

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter",
        subscriber,
      },
      { status: 201 },
    )
  } catch (error: any) {
    // Check if it's a duplicate email error
    if (error.message?.includes("duplicate") || error.code === "23505") {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 409 })
    }

    console.error("Subscribe error:", error)
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
