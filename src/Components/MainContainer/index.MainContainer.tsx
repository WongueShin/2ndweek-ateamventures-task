import React from 'react';
import * as S from 'Components/MainContainer/sytle.MainContainer';
import RequestCard from 'Components/RequestCard';
import { childType } from 'Components/Main/index.Main';

interface Props {
  data?: childType[] | undefined;
}

const MainContainer = ({ data }: Props) => {
  console.log('제발');
  console.log(data);
  return (
    <S.MainContainer>
      <RequestCard />
    </S.MainContainer>
  );
};

export default MainContainer;
