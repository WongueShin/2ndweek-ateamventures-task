import * as S from "Components/Filter/style.Filter";
import { FilterType } from "Components/Main/index.Main";
// import { MaterialType } from "src/Const/MaterialType";
// import { MethodType } from "src/Const/MethodType";
import { useState } from "react";

enum MaterialType {
  aluminum = "알루미늄",
  steel = "강철",
  copper = "구리",
  carbonSteel = "탄소강",
  stainlessSteel = "스테인리스강",
}

enum MethodType {
  milling = "밀링",
  shelf = "선반",
}

enum defaultMenu {
  method = "가공방식",
  material = "재료",
}

interface FilterPropsType {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

interface SelectPropsType extends FilterPropsType {
  data: typeof MaterialType | typeof MethodType;
}

const Filter = ({ filter, setFilter }: FilterPropsType) => {
  const handleReset = () => {
    const newState = { method: [], material: [], check: filter.check };
    setFilter(newState);
  };

  return (
    <S.Container>
      <h3>들어온 요청</h3>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <S.FilterZone>
        <S.SelectZone>
          <S.SelectWarpper>
          <Select data={MaterialType} filter={filter} setFilter={setFilter} />
          </S.SelectWarpper>
          <S.SelectWarpper>
          <Select data={MethodType} filter={filter} setFilter={setFilter} />
          </S.SelectWarpper>
          <S.ResetContainer
            onClick={() => {
              handleReset();
            }}
          >
            <S.ResetBtn />
            <S.ResetMessage>필터링리셋</S.ResetMessage>
          </S.ResetContainer>
        </S.SelectZone>
        <Toggle filter={filter} setFilter={setFilter} />
      </S.FilterZone>
    </S.Container>
  );
};

const Select = (props: SelectPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (
    item: string,
    position: typeof MaterialType | typeof MethodType
  ): void => {
    const newState = { ...props.filter };

    if (position === MaterialType) {
      !newState.material.includes(item)
        ? newState.material.push(item)
        : newState.material.splice(newState.material.indexOf(item), 1);
    } else {
      !newState.method.includes(item)
        ? newState.method.push(item)
        : newState.method.splice(newState.method.indexOf(item), 1);
    }
    props.setFilter(newState);
  };

  const handleChecked = (
    item: string,
    position: typeof MaterialType | typeof MethodType
  ): boolean => {

    const newState ={...props.filter};

    return position === MaterialType ? newState.material.includes(item) : newState.method.includes(item)
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
        {Object.keys(props.data).length === 2
          ? defaultMenu.method
          : defaultMenu.material}
        &nbsp;<span>{Object.keys(props.data).length === 2 ? props.filter.method.length !== 0 && `(${props.filter.method.length})` : props.filter.material.length !== 0 && `(${props.filter.material.length})`}</span>
        <S.ArrowIcon>▼</S.ArrowIcon>
      </S.SelectDefault>
      <S.OverFlowContainer>
        {
          <S.SelectBox isOpen={isOpen}>
            {(Object.keys(props.data) as Array<keyof typeof props.data>).map(
              (item,index) => {
                return (
                  <li key={item}>
                    <label htmlFor={`${(Object.keys(props.data).length === 2 ? `method` : `material`)}${index}`}>
                      <input
                        id={`${(Object.keys(props.data).length === 2 ? `method` : `material`)}${index}`}
                        checked={handleChecked(props.data[item], props.data)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(props.data[item], props.data);
                        }}
                        type="checkbox"
                        readOnly
                      />
                      {props.data[item]}
                    </label>
                  </li>
                );
              }
            )}
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
