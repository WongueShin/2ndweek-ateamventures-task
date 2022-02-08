import * as S from "Components/Filter/style.Filter";
import { childType } from "Components/Main/index.Main";
import { MaterialType } from "Const/MaterialType";
import { MethodType } from "Const/MethodType";
import { useEffect, useState } from "react";

export interface FilterType {
  method: string[];
  material: string[];
  check: boolean;
}

enum defaultMenu {
  method = "가공방식",
  material = "재료",
}

enum isWaiting{
  Waiting = "대기중",
  inConsultation = "상담중",
}

interface FilterPropsType {
  JsonData: childType[]|undefined;
  filter: childType[]|undefined;
  setFilter: React.Dispatch<React.SetStateAction<childType[]|undefined>>;
}

interface TogglePropsType{
  filterStat: FilterType;
  setFilterStat: React.Dispatch<React.SetStateAction<FilterType>>;
}

interface SelectPropsType extends TogglePropsType{
  data: typeof MaterialType | typeof MethodType;
}

function filterinConsultation(ele:childType){
  return( ele.status == isWaiting.inConsultation )
}


function filterMaterial(ele:childType, filterStat:FilterType){
  let returnvalue = false;
  ele.material.forEach(materCase => {
    for(let index = 0; index<filterStat.material.length; index++){
      if(materCase == filterStat.material[index]){
        returnvalue = true;
      }
    }
  });
  return returnvalue;
}

function filterMethod(ele:childType, filterStat:FilterType){
  let returnvalue = false;
  ele.method.forEach(methodCase => {
    for(let index = 0; index<filterStat.method.length; index++){
      if(methodCase == filterStat.method[index]){
        returnvalue = true;
      }
    }
  });
  return returnvalue;
}


const Filter = ({JsonData, filter, setFilter }: FilterPropsType) => {
  const [filterStat, setFilterStat] = useState<FilterType>({
    method: [],
    material: [],
    check: false,
  });

  console.log(filter, filterStat);

  

  useEffect(()=>{
    if(JsonData){
    let newState = [...JsonData];
    if(filterStat.check){
      newState = newState.filter(filterinConsultation);
    }
    if(filterStat.material.length > 0){
      newState = newState.filter((e) => filterMaterial(e, filterStat));
    }
    if(filterStat.method.length > 0){
      newState = newState.filter((e)=>filterMethod(e, filterStat));
    }
    setFilter(newState);
  }}, [filterStat])

  const handleReset = () => {
    const newState = { method: [], material: [], check: filterStat.check };
    setFilterStat(newState);
  };
  return (
    <S.Container>
      <h3>들어온 요청</h3>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <S.FilterZone>
        <S.SelectZone>
          <S.DropDown>
            <S.SelectWarpper>
              <Select data={MaterialType} filterStat={filterStat} setFilterStat={setFilterStat} />
            </S.SelectWarpper>

            <S.SelectWarpper>
              <Select data={MethodType} filterStat={filterStat} setFilterStat={setFilterStat} />
            </S.SelectWarpper>

            <S.ResetContainer onClick={() => {handleReset();}}>
              <S.ResetBtn />
              <S.ResetMessage>필터링리셋</S.ResetMessage>
            </S.ResetContainer>
          </S.DropDown>

        </S.SelectZone>
        <Toggle filterStat={filterStat} setFilterStat={setFilterStat} />
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
    const newState = { ...props.filterStat };

    if (position === MaterialType) {
      !newState.material.includes(item)
        ? newState.material.push(item)
        : newState.material.splice(newState.material.indexOf(item), 1);
    } else {
      !newState.method.includes(item)
        ? newState.method.push(item)
        : newState.method.splice(newState.method.indexOf(item), 1);
    }
    props.setFilterStat(newState);
  };

  const handleChecked = (
    item: string,
    position: typeof MaterialType | typeof MethodType
  ): boolean => {

    const newState ={...props.filterStat};

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
        &nbsp;<span>{Object.keys(props.data).length === 2 ? props.filterStat.method.length !== 0 && `(${props.filterStat.method.length})` : props.filterStat.material.length !== 0 && `(${props.filterStat.material.length})`}</span>
        <S.ArrowIcon>▼</S.ArrowIcon>
      </S.SelectDefault>
      <S.OverFlowContainer isOpen= {isOpen}>
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

const Toggle = ({ filterStat, setFilterStat }:TogglePropsType) => {
  const handleCheck = (): void => {
    const newState = { ...filterStat };

    newState.check = !newState.check;

    setFilterStat(newState);
  };

  return (
    <S.ToggleContainer
      onClick={() => {
        handleCheck();
      }}
    >
      <S.ToggleBox
        checked={filterStat.check}
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
