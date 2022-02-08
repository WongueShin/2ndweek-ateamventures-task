import React, { useEffect, useState } from "react";
import * as S from "Components/Main/style.Main";
import MainContainer from "Components/MainContainer/index.MainContainer";
import Filter from "Components/Filter/index.Filter";

export interface childType {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  docs?: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

async function UseFetch() {
  try {
    const response = await fetch("https://ateamserver.herokuapp.com/requests");
    const data: childType[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const Main: React.FC = () => {
  const [fetchData, setFetchData] = useState<childType[]>();
  const [filter, setFilter] = useState<childType[]>();
  useEffect(() => {
    async function fetchRequestData() {
      const data = await UseFetch();
      setFetchData(data);
    }
    fetchRequestData();
  }, []);
  console.log(fetchData);

  useEffect(() => {
    setFilter(fetchData);
  }, [fetchData]);

  return (
      <S.Main> 
      <Filter JsonData={fetchData} filter={filter} setFilter={setFilter} />
      <MainContainer data={filter} />
      </S.Main> 
  );
};

export default Main;
