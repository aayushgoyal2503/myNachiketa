"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Leaderboards() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://lichess.org/api/player/top/10/blitz")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch leaderboards");
        return res.json();
      })
      .then(data => setPlayers(data.users || []))
      .catch(err => setError("Could not load leaderboards."));
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
      <h2 style={{ color: "#282c34" }}>Top Blitz Players</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {players.map(player => (
          <li
            key={player.id}
            style={{
              color: "#282c34",
              fontWeight: "bold",
              margin: "8px 0",
              fontSize: "1.1em"
            }}
          >
            {player.username} {player.title ? `(${player.title})` : ""} - Rating: {player.perfs.blitz.rating}
          </li>
        ))}
      </ul>
    </main>
  );
}