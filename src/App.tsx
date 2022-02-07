import React from 'react';
import Main from 'Components/Main/index.Main';
import { GlobalStyle } from './Style/style';
import { MainContainer } from 'Components/MainContainer/sytle.MainContainer';
import RequestCard from 'Components/RequestCard';

function App() {
  return (
    <>
      <GlobalStyle />
      Ateam ventures
      <Main />
      <RequestCard />
      <MainContainer />
    </>
  );
}

export default App;
