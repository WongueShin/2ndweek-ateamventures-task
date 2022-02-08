import React from "react";
import * as S from "Components/RequestCard/style.RequestCard";
import { childType } from "Components/Main/index.Main";

interface CardProps {
  cardData: childType;
}
const RequestCard = ({ cardData }: CardProps) => {
  console.log("하하", cardData);
  return (
    <S.CardContainer>
      {cardData.status === "상담중" ? (
        <>
          <S.StatusDiv>
            <S.StatusSpan>상담중</S.StatusSpan>
          </S.StatusDiv>
        </>
      ) : null}
      <S.ProjectTitle>{cardData.title}</S.ProjectTitle>
      <S.ClientName>{cardData.client}</S.ClientName>
      <S.DueDateSpan>{cardData.due}까지 납기</S.DueDateSpan>
      <S.DivisionLine />
      <S.OrderContent>
        <S.DetailSapn>도면개수</S.DetailSapn>
        <S.RequestSpan> {cardData.count}개</S.RequestSpan>
      </S.OrderContent>
      <S.OrderContent>
        <S.DetailSapn>총 수량</S.DetailSapn>
        <S.RequestSpan> {cardData.amount}개</S.RequestSpan>
      </S.OrderContent>
      <S.OrderContent>
        <S.DetailSapn>가공방식</S.DetailSapn>
        <S.RequestSpan>{cardData.method.toString()}</S.RequestSpan>
      </S.OrderContent>
      <S.OrderContent>
        <S.DetailSapn>재료</S.DetailSapn>
        <S.RequestSpan> {cardData.material}</S.RequestSpan>
      </S.OrderContent>
      <S.ButtonContainer>
        <S.RequestDetailBtn>
          <S.RequestDetailBtnSpan>요청내역 보기</S.RequestDetailBtnSpan>
        </S.RequestDetailBtn>
        <S.ChatBtn>
          <S.ChatBtnSpan>채팅하기</S.ChatBtnSpan>
        </S.ChatBtn>
      </S.ButtonContainer>
    </S.CardContainer>
  );
};
export default RequestCard;
