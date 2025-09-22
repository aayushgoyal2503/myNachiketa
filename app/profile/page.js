"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    setError("");
    setProfile(null);
    if (!username) return;
    try {
      const res = await fetch(`https://lichess.org/api/user/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      setError("Could not fetch profile.");
    }
  };

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
      <h2 style={{ color: "#282c34" }}>Lichess Profile</h2>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ padding: "8px", marginRight: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <button
        onClick={fetchProfile}
        style={{ padding: "8px 16px", borderRadius: "4px", background: "#61dafb", border: "none", color: "#282c34", fontWeight: "bold" }}
      >
        Fetch Profile
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {profile && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <img
            src={profile.profile?.icon || `https://lichess.org/assets/images/user/${profile.id}.png`}
            alt="Profile"
            style={{ width: "80px", borderRadius: "50%", marginBottom: "10px" }}
            onError={e => { e.target.style.display = 'none'; }}
          />
          <p style={{ color: "#282c34", fontWeight: "bold" }}>
            Username: {profile.username}
          </p>
          <p style={{ color: "#282c34", fontWeight: "bold" }}>
            Bio: {profile.bio ? profile.bio : "No bio available"}
          </p>
          <p style={{ color: "#282c34", fontWeight: "bold" }}>
            Number of games played: {profile.count?.all !== undefined ? profile.count.all : "Not available"}
          </p>
          <p style={{ color: "#282c34", fontWeight: "bold" }}>
            Rating: {profile.perfs?.blitz?.rating !== undefined ? profile.perfs.blitz.rating : "Not available"}
          </p>
        </div>
      )}
    </main>
  );
}