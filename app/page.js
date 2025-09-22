"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px #ccc",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          background: "#282c34",
          padding: "10px",
          color: "white",
          marginBottom: "30px",
          borderRadius: "8px",
        }}
      >
        <Link href="/profile" style={{ color: "#61dafb", margin: "0 10px" }}>
          Profile
        </Link>
        |
        <Link href="/leaderboards" style={{ color: "#61dafb", margin: "0 10px" }}>
          Leaderboards
        </Link>
        |
        <Link href="/tournaments" style={{ color: "#61dafb", margin: "0 10px" }}>
          Tournaments
        </Link>
      </nav>
      <h2 style={{ color: "#282c34" }}>Welcome to Lichess Info App</h2>
      <p>Use the navigation above to view profiles, leaderboards, and tournaments.</p>
    </main>
  );
}