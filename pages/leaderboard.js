import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px #ccc;
`;

export default function Leaderboards() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://lichess.org/api/player/top/10/blitz")
      .then(res => res.json())
      .then(data => setPlayers(data.users || []));
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <h2>Top Blitz Players</h2>
        <ul>
          {players.map(player => (
            <li key={player.id}>
              <strong>{player.username}</strong> - Rating: {player.perfs.blitz.rating}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}