import React from "react";
import Main from "Components/Main/index.Main";
import Nav from "Components/Nav/index.Nav";
import { GlobalStyle } from "./Style/style";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        Ateam ventures
        <Nav/>
        <Main />
      </div>
    </>
  );
}

export default App;
