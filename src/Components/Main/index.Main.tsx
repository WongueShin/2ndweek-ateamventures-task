import React, { useEffect, useState } from 'react';
import * as S from 'Components/Main/style.Main';
import MainContainer from 'Components/MainContainer/index.MainContainer';
import { MaterialType } from 'src/SangSu/MaterialType';
import { MethodType } from 'src/SangSu/MethodType';
import Filter from 'Components/Filter/index.Filter';

export interface childType {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  docs?: number;
  amount: number;
  method: string[] | MethodType;
  material: string[] | MaterialType;
  status: string;
}

export interface FilterType {
  method: string | null;
  material: string | null;
  check: boolean;
}

async function UseFetch() {
  try {
    const response = await fetch('https://ateamserver.herokuapp.com/requests');
    const data: childType[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const Main: React.FC = () => {
  const [fetchData, setFetchData] = useState<childType[]>();
  const [filter, setFilter] = useState<FilterType>({
    method: null,
    material: null,
    check: false,
  });
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
      <S.Main>
        <Filter filter={filter} setFilter={setFilter} />
      </S.Main>
      <MainContainer data={fetchData} />
    </>
  );
};

export default Main;
