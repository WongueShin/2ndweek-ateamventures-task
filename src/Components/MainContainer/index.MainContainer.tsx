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
    <S.MainContainer>
      {isLoading ? (
        <>
          <div>로딩 중</div>
        </>
      ) : (
        <>
          {data &&
            data.map((cardData: childType, index: number) => {
              return (
                <>
                  <RequestCard key={index} cardData={cardData} />
                </>
              );
            })}
        </>
      )}
    </S.MainContainer>
  );
};

export default MainContainer;
