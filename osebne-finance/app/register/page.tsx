"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <main style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Registracija</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Uporabniško ime"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
          style={{ padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Geslo"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          style={{ padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Registriraj se
        </button>
      </form>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </main>
  );
}
