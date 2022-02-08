import React, { useState, useEffect } from 'react';
import * as S from 'Components/MainContainer/style.MainContainer';
import RequestCard from 'Components/RequestCard/index.RequestCard';
import { childType } from 'Components/Main/index.Main';

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
          {data && data.length > 0 ? (
            data.map((cardData: childType, index: number) => {
              return (
                <div key={index}>
                  <RequestCard cardData={cardData} />
                </div>
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
