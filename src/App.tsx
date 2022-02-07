import React from "react";
import Main from "Components/Main/index.Main";
import { GlobalStyle } from "./Style/style";
import MainContainer from "Components/MainContainer/index.MainContainer";
import RequestCard from "Components/RequestCard";
import Nav from "Components/Nav/index.Nav";


function App() {
  return (
    <>
      <GlobalStyle />
      Ateam ventures
      <Main />
      <RequestCard />
      <MainContainer />
      <Nav/>
    </>
  );
}

export default App;
