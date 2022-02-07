import * as S from "Components/Filter/style.Filter";

interface Option {
  idx: number;
  value: string;
}

const method: Option[] = [
  { idx: 1, value: "밀링" },
  { idx: 2, value: "선반" },
];

const material: Option[] = [
  { idx: 1, value: "알루미늄" },
  { idx: 2, value: "탄소강" },
  { idx: 3, value: "구리" },
  { idx: 4, value: "합금강" },
  { idx: 5, value: "강철" },
];

const Filter = (): JSX.Element => {
  return (
    <S.Container>
      <h3>들어온 요청</h3>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <S.FilterZone>
        <S.SelectZone>
          <S.SelectBox>
            <S.Option selected disabled hidden>
              가공방식
            </S.Option>
            {method.map((item: Option) => {
              return <S.Option key={item.idx}>{item.value}</S.Option>;
            })}
          </S.SelectBox>
          <S.SelectBox>
            <S.Option selected disabled hidden>
              재료
            </S.Option>
              {
                material.map((item :Option) => {
                  return <S.Option key={item.idx}>{item.value}</S.Option>
                })
              }
          </S.SelectBox>
        </S.SelectZone>
        <S.ToggleContainer>
          <S.ToggleBox/>
          <S.ToggleBoxLabel/>
        </S.ToggleContainer>
      </S.FilterZone>
    </S.Container>
  );
};

export default Filter;
