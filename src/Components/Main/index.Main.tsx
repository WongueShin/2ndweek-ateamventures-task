import React, { useEffect, useState } from 'react';
import * as S from 'Components/Main/style.Main';
import { MainContainer } from 'Components/MainContainer/sytle.MainContainer';

export interface childType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

async function UseFetch() {
  try {
    const response = await fetch('https://ateamserver.herokuapp.com/requests');
    const data: childType = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const Main: React.FC = () => {
  const [fetchData, setFetchData] = useState<childType>();
  useEffect(() => {
    async function fetchRequestData() {
      const data = await UseFetch();
      setFetchData(data);
    }
    fetchRequestData();
  }, []);
  console.log(fetchData);

  return (
    <>
      <S.Main>Main</S.Main>
      <MainContainer data={fetchData} />
    </>
  );
};

export default Main;
