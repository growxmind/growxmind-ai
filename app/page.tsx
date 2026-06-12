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
    <div style={styles.page}>

      <h1>🔥 GrowXmind AI</h1>

      <p>Your AI Discipline Coach</p>

      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <button onClick={join} style={styles.btn}>
        Join Waitlist
      </button>

      <p>{msg}</p>

    </div>
  )
}

const styles = {
  page: {
    background: "#070A12",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
    paddingTop: 120
  },

  input: {
    padding: 12,
    width: 250,
    marginTop: 20,
    borderRadius: 10,
    border: "1px solid #1F2937",
    background: "#111827",
    color: "white"
  },

  btn: {
    marginTop: 15,
    padding: 12,
    background: "#6366F1",
    color: "white",
    borderRadius: 10,
    border: "none"
  }
}
