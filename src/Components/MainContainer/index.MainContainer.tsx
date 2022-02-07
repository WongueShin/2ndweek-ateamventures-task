import React from "react";
import * as S from "Components/MainContainer/sytleMC";
import RequestCard from "Components/RequestCard/index.RequestCard";
import { childType } from "Components/Main/index.Main";

interface Props {
  data: childType[] | undefined;
}

const MainContainer = ({ data }: Props) => {
  // console.log("제발");
  // console.log(data);

  return (
    <S.MainContainer>
      {data &&
        data.map((cardData: any, index: number) => {
          return (
            <>
              <RequestCard key={index.id} cardData={cardData} />
            </>
          );
        })}
    </S.MainContainer>
  );
};

export default MainContainer;
