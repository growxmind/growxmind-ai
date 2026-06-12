"use client"

import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  async function join() {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email })
    })

    const data = await res.json()
    if (data.success) setMsg("🔥 You're on the waitlist!")
  }

  return (
    <div style={{ textAlign: "center", paddingTop: 100, background: "#0b0f19", color: "white", minHeight: "100vh" }}>
      <h1>🔥 GrowXmind AI</h1>
      <p>Your AI Discipline Coach</p>

      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, marginTop: 20 }}
      />

      <br />

      <button onClick={join} style={{ marginTop: 20, padding: 10 }}>
        Join Waitlist
      </button>

      <p>{msg}</p>
    </div>
  )
}
