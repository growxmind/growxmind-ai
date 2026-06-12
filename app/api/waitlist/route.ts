import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  const { email } = await req.json()

  const ref = Math.random().toString(36).substring(2, 8)

  await supabase.from("waitlist").insert([
    { email, ref_code: ref }
  ])

  return NextResponse.json({ success: true, ref })
}
