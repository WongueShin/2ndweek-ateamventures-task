import React from "react";
import * as S from "Components/MainContainer/sytleMC";
import RequestCard from "Components/RequestCard/index.RequestCard";
import { childType } from "Components/Main/index.Main";
import { MaterialType } from "Const/MaterialType";

interface Props {
  data?: childType[] | undefined;
}

const MainContainer = ({ data }: Props) => {
  console.log(data);
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
