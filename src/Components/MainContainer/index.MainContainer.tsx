import React from "react";
import * as S from "Components/MainContainer/sytle.MainContainer";

// export interface childType {
//   id: number | string;
//   title: string;
//   client: string;
//   due: number | string;
//   count: number;
//   amount: number;
//   method: string[];
//   material: string[];
//   status: string;
// }

const MainContainer: React.FC = (props) => {
  if (
    props.method === !("밀링" || "선반") ||
    props.material ===
      !("알루미늄" || "강철" || "구리" || "탄소강" || "스테인리스강") ||
    props.status === !("상담중" || "대기중")
  ) {
    return <h3>조건에 맞는 견적요청이 없습니다.</h3>;
  } else {
    return <S.MainContainer></S.MainContainer>;
  }
};

export default MainContainer;
