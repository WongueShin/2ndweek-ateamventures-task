import React from "react";
import * as S from "Components/MainContainer/sytle.MainContainer";

export interface childType {
  id: number | string;
  title: string;
  client: string;
  due: number | string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

const MainContainer: React.FC = () => {
  return <S.MainContainer>박스 MAP</S.MainContainer>;
};

export default MainContainer;
