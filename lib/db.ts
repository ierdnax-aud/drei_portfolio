import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function getSubscribers() {
  try {
    const result = await sql`
      SELECT id, email, name, subscribed_at, created_at
      FROM subscribers
      ORDER BY created_at DESC
    `
    return result
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    throw error
  }
}

export async function addSubscriber(email: string, name?: string) {
  try {
    const result = await sql`
      INSERT INTO subscribers (email, name)
      VALUES (${email}, ${name || null})
      ON CONFLICT (email) DO UPDATE
      SET updated_at = CURRENT_TIMESTAMP
      RETURNING id, email, name, created_at
    `
    return result[0]
  } catch (error) {
    console.error("Error adding subscriber:", error)
    throw error
  }
}

export async function deleteSubscriber(id: number) {
  try {
    const result = await sql`
      DELETE FROM subscribers
      WHERE id = ${id}
      RETURNING id
    `
    return result[0]
  } catch (error) {
    console.error("Error deleting subscriber:", error)
    throw error
  }
}
