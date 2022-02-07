import React from 'react';
import Main from 'Components/Main/index.Main';
import { GlobalStyle } from './Style/style';
import MainContainer from 'Components/MainContainer/index.MainContainer';
import Nav from 'Components/Nav/index.Nav';
import RequestCard from 'Components/RequestCard';


function App() {
  return (
    <>
      <GlobalStyle />
      <Nav/>
      Ateam ventures
      <Main />
      <RequestCard />
      <MainContainer />

    </>
  );
}

export default App;
