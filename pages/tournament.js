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

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetch("https://lichess.org/api/tournament")
      .then(res => res.text())
      .then(text => {
        const lines = text.trim().split("\n");
        const data = lines.map(line => JSON.parse(line));
        setTournaments(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <h2>Ongoing Tournaments</h2>
        <ul>
          {tournaments.map(t => (
            <li key={t.id}>
              <strong>{t.fullName}</strong> - {t.nbPlayers} players
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}