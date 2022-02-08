import React from "react";
import Main from "Components/Main/index.Main";
import { GlobalStyle } from "./Style/style";
import Nav from "Components/Nav/index.Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      Ateam ventures
      <Nav />
      <Main />
      <Nav />
    </>
  );
}

export default App;
