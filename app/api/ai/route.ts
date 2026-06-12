import { NextResponse } from "next/server"
import { openai } from "@/lib/openai"

export async function POST(req: Request) {
  const { message } = await req.json()

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }]
  })

  return NextResponse.json({
    reply: res.choices[0].message.content
  })
}
