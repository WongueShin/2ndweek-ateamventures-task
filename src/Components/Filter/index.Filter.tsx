import * as S from "Components/Filter/style.Filter";
import { FilterType } from "Components/Main/index.Main";
// import MaterialType from "src/SangSu/MaterialType";
// import MethodType from "src/SangSu/MethodType";
import { useState } from "react";

enum MaterialType {
  알루미늄 = "알루미늄",
  강철 = "강철",
  구리 = "구리",
  탄소강 = "탄소강",
  스테인리스강 = "스테인리스강",
}

enum MethodType {
  밀링 = "밀링",
  선반 = "선반",
}

enum defaultMenu {
  가공방식 = "가공방식",
  재료 = "재료",
}

interface FilterPropsType {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

interface SelectPropsType {
  data: typeof MaterialType | typeof MethodType;
}

const Filter = ({ filter, setFilter }: FilterPropsType) => {
  const handleCheck = (): void => {
    const newState = { ...filter };

    newState.check = !newState.check;

    setFilter(newState);
  };

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    position: string
  ): void => {
    const newSelect = { ...filter };

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
          <Select data={MaterialType} />
          <Select data={MethodType} />
          <S.ResetContainer>
            <S.ResetBtn />
            <S.ResetMessage>필터링리셋</S.ResetMessage>
          </S.ResetContainer>
        </S.SelectZone>
        <S.ToggleContainer>
          <S.ToggleBox
            checked={filter.check}
            id="checkbox"
            type="checkbox"
            readOnly
          />
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

const Select = (
  { data }: SelectPropsType,
  { filter, setFilter }: FilterPropsType
) => {
  const [isOpen, setIsOpen] = useState([
    { idx: 1, state: false },
    { idx: 2, state: false },
  ]);

  const handleOpen = () => {
    const newState = [...isOpen];

    // setIsOpen(isOpen[index]);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    // const newSelect = { ...filter };
    console.log(e.target.value);
    // setFilter(newSelect);
  };

  return (
    <S.SelectContainer>
      <span
        onClick={() => {
          handleOpen();
        }}
      >
        {Object.keys(data).length !== 2
          ? defaultMenu.가공방식
          : defaultMenu.재료}
        ▼
      </span>
      {isOpen && (
        <S.SelectBox>
          {(Object.keys(data) as Array<keyof typeof data>).map(
            (item, index) => {
              return (
                <>
                  <li key={index}>
                    <label htmlFor="select">
                      <input
                        id="select"
                        onChange={(e) => {
                          handleSelect(e);
                        }}
                        type="checkbox"
                        value={data[item]}
                      />
                      {data[item]}
                    </label>
                  </li>
                </>
              );
            }
          )}
        </S.SelectBox>
      )}
    </S.SelectContainer>
  );
};

export default Filter;
