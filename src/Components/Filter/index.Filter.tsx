import * as S from "Components/Filter/style.Filter";
import { FilterType } from 'Components/Main/index.Main';

interface Option {
  idx: number;
  value: string;
}
interface FilterPropsType {
  filter : FilterType,
  setFilter : React.Dispatch<React.SetStateAction<FilterType>>
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

const Filter = ({filter , setFilter} :FilterPropsType) => {
  
  const handleCheck = (): void => {

    const newState = {...filter}

    newState.check = !newState.check 

    setFilter(newState);
  };

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    position: string
  ): void => {
    const newSelect = {...filter};

    position === "method"
      ? (newSelect.method = e.target.value)
      : (newSelect.material = e.target.value);

    setFilter(newSelect);
  };

  return (
    <S.Container>
      <h3>들어온 요청</h3>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <S.FilterZone>
        <S.SelectZone>
          <S.SelectBox
            defaultValue={"가공방식"}
            onChange={(e) => {
              handleSelect(e, "method");
            }}
          >
            <S.Option disabled hidden>
              가공방식
            </S.Option>
            {method.map((item: Option) => {
              return (
                <S.Option key={item.idx} value={item.value}>
                  {item.value}
                </S.Option>
              );
            })}
          </S.SelectBox>
          <S.SelectBox
            defaultValue={"재료"}
            onChange={(e) => {
              handleSelect(e, "material");
            }}
          >
            <S.Option disabled hidden>
              재료
            </S.Option>
            {material.map((item: Option) => {
              return (
                <S.Option key={item.idx} value={item.value}>
                  {item.value}
                </S.Option>
              );
            })}
          </S.SelectBox>
        </S.SelectZone>
        <S.ToggleContainer>
          <S.ToggleBox checked={filter.check} id="checkbox" type="checkbox" readOnly/>
          <S.ToggleBoxLabel
            onClick={() => {
              handleCheck();
            }}
          />
          <span>상담 중인 요청만 보기</span>
        </S.ToggleContainer>
      </S.FilterZone>
    </S.Container>
  );
};

export default Filter;