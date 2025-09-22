"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://lichess.org/api/tournament")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch tournaments");
        return res.text();
      })
      .then(text => {
        const lines = text.trim().split("\n");
        const data = lines.map(line => JSON.parse(line));
        setTournaments(data);
      })
      .catch(err => setError("Could not load tournaments."));
  }, []);

  return (
    <main style={{
      maxWidth: "600px",
      margin: "40px auto",
      background: "white",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px #ccc",
      textAlign: "center",
    }}>
      <nav style={{
        background: "#282c34",
        padding: "10px",
        color: "white",
        marginBottom: "30px",
        borderRadius: "8px",
      }}>
        <Link href="/profile" style={{ color: "#61dafb", margin: "0 10px" }}>Profile</Link>|
        <Link href="/leaderboards" style={{ color: "#61dafb", margin: "0 10px" }}>Leaderboards</Link>|
        <Link href="/tournaments" style={{ color: "#61dafb", margin: "0 10px" }}>Tournaments</Link>
      </nav>
      <h2 style={{ color: "#282c34" }}>Ongoing Tournaments</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tournaments.map(t => (
          <li key={t.id}>
            <strong>{t.fullName}</strong> - {t.nbPlayers} players
          </li>
        ))}
      </ul>
    </main>
  );
}