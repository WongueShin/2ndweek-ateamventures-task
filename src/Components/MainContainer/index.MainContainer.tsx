import React, { useState, useEffect } from 'react';
import * as S from 'Components/MainContainer/sytleMC';
import RequestCard from 'Components/RequestCard/index.RequestCard';
import { childType } from 'Components/Main/index.Main';
import { MaterialType } from 'Const/MaterialType';

interface Props {
  data?: childType[] | undefined;
}

const MainContainer = ({ data }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data !== undefined) {
      setLoading(false);
    } else setLoading(true);
  }, [data]);

  console.log(data);
  return (
    <S.MainContainerDiv>
      {isLoading ? (
        <>
          <S.LoadingDiv>
            <S.LoadingCircle />
          </S.LoadingDiv>
        </>
      ) : (
        <>
          {data ? (
            data.map((cardData: childType, index: number) => {
              return (
                <>
                  <RequestCard key={index} cardData={cardData} />
                </>
              );
            })
          ) : (
            <>
              <S.BlankDiv>
                <S.BlankSpan>조건에 맞는 견적 요청이 없습니다.</S.BlankSpan>
              </S.BlankDiv>
            </>
          )}
        </>
      )}
    </S.MainContainerDiv>
  );
};

export default MainContainer;
