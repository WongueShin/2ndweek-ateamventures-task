import React from "react";
import Main from "Components/Main/index.Main";
import { GlobalStyle } from "./Style/style";
// import MainContainer from "Components/MainContainer/index.MainContainer";
import Nav from "Components/Nav/index.Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      Ateam ventures
      <Nav />
      <Main />
      {/* <MainContainer /> */}
      <Nav />
    </>
  );
}

export default App;
