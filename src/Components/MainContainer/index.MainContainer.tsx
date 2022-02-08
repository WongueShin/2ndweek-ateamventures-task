import React from "react";
import * as S from "Components/MainContainer/sytleMC";
import RequestCard from "Components/RequestCard/index.RequestCard";
import { childType } from "Components/Main/index.Main";

interface Props {
  data: childType[];
}

const MainContainer = ({ data }: Props) => {
  if (
    data.method.length === 0 ||
    data.material.length === 0
  ) {
    return <h3>조건에 맞는 견적요청이 없습니다.</h3>;
  return (
    <S.MainContainer>
      {data &&
        data.map((cardData: childType, index: number) => {
          return (
            <>
              <RequestCard key={index} cardData={cardData} />
            </>
          );
        })}
    </S.MainContainer>
  );
};

export default MainContainer;
