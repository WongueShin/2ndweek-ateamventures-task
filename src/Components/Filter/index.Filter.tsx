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

interface SelectPropsType extends FilterPropsType {
  data: typeof MaterialType | typeof MethodType;
}

const Filter = ({ filter, setFilter }: FilterPropsType) => {
  return (
    <S.Container>
      <h3>들어온 요청</h3>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <S.FilterZone>
        <S.SelectZone>
          <Select data={MaterialType} filter={filter} setFilter={setFilter} />
          <Select data={MethodType} filter={filter} setFilter={setFilter} />
          <S.ResetContainer>
            <S.ResetBtn />
            <S.ResetMessage>필터링리셋</S.ResetMessage>
          </S.ResetContainer>
        </S.SelectZone>
        <Toggle filter={filter} setFilter={setFilter} />
      </S.FilterZone>
    </S.Container>
  );
};

const Select = (
  { data }: SelectPropsType,
  { filter, setFilter }: FilterPropsType
) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  const handleSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: string
  ): void => {
    const newState = { ...filter };

    position === "method"
      ? newState.method?.push(e.target.value as string)
      : newState.method?.push(e.target.value as string);

      console.log(e.target.value)

  };

  return (
    <S.SelectContainer
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <S.SelectDefault
        className="selectTitle"
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        isOpen={isOpen}
      >
        {Object.keys(data).length !== 2
          ? defaultMenu.가공방식
          : defaultMenu.재료}
        &nbsp;<S.ArrowIcon>▼</S.ArrowIcon>
      </S.SelectDefault>
      <S.OverFlowContainer>
      {
          <S.SelectBox isOpen={isOpen}>
            {(Object.keys(data) as Array<keyof typeof data>).map((item) => {
              return (
                <>
                  <li key={item}>
                    <label htmlFor="select">
                      <input
                        id="select"
                        onChange={(e) => {
                          handleSelect(e, "method");
                        }}
                        type="checkbox"
                        value={data[item]}
                      />
                      {data[item]}
                    </label>
                  </li>
                </>
              );
            })}
          </S.SelectBox>
      }
      </S.OverFlowContainer>
    </S.SelectContainer>
  );
};

const Toggle = ({ filter, setFilter }: FilterPropsType) => {
  const handleCheck = (): void => {
    const newState = { ...filter };

    newState.check = !newState.check;

    setFilter(newState);
  };

  return (
    <S.ToggleContainer
      onClick={() => {
        handleCheck();
      }}
    >
      <S.ToggleBox
        checked={filter.check}
        id="checkbox"
        type="checkbox"
        readOnly
      />
      <S.ToggleBoxLabel />
      <S.ToggleMessage>상담 중인 요청만 보기</S.ToggleMessage>
    </S.ToggleContainer>
  );
};

export default Filter;
