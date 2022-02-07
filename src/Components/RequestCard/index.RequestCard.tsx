import React from 'react';
import * as S from 'Components/RequestCard/style.RequestCard';

const RequestCard: React.FC = () => {
  const data = {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '대기중',
  };

  return (
    <S.CardContainer>
      {data.status === '상담중' ? (
        <>
          <S.StatusDiv>
            <S.StatusSpan>상담중</S.StatusSpan>
          </S.StatusDiv>
        </>
      ) : null}
      <S.ProjectTitle>{data.title}</S.ProjectTitle>
      <S.ClientName>{data.client}</S.ClientName>
      <S.DueDateSpan>{data.due}까지 납기</S.DueDateSpan>
      <S.DivisionLine />
      <S.OrderContent>
        <S.DetailSapn>도면개수</S.DetailSapn>
        <S.RequestSpan> {data.count}개</S.RequestSpan>
      </S.OrderContent>
      <S.OrderContent>
        <S.DetailSapn>총 수량</S.DetailSapn>
        <S.RequestSpan> {data.amount}개</S.RequestSpan>
      </S.OrderContent>
      <S.OrderContent>
        <S.DetailSapn>가공방식</S.DetailSapn>
        <S.RequestSpan>{data.method.toString()}</S.RequestSpan>
      </S.OrderContent>
      <S.OrderContent>
        <S.DetailSapn>재료</S.DetailSapn>
        <S.RequestSpan> {data.material}</S.RequestSpan>
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
