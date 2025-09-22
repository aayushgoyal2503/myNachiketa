import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.nav`
  background: #282c34;
  padding: 10px;
  color: white;
`;

const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <NavBar>
      <Link href="/profile" passHref legacyBehavior>
        <NavLink>Profile</NavLink>
      </Link>
      |
      <Link href="/leaderboards" passHref legacyBehavior>
        <NavLink>Leaderboards</NavLink>
      </Link>
      |
      <Link href="/tournaments" passHref legacyBehavior>
        <NavLink>Tournaments</NavLink>
      </Link>
    </NavBar>
  );
}