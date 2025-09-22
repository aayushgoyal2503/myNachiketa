import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f5f5;
  }
  nav {
    background: #282c34;
    padding: 10px;
    color: white;
  }
  nav a {
    color: #61dafb;
    text-decoration: none;
    margin: 0 10px;
  }
  nav a:hover {
    text-decoration: underline;
  }
  h2 {
    color: #282c34;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}