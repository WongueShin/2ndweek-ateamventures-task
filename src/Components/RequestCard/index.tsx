import React from 'react';
import styled from 'styled-components';

const RequestCard: React.FC = () => {
  return (
    <CardContainer>
      <ProjectName>제목</ProjectName>
      <ClientName>고객사</ClientName>
      <DateSpan>2020.12.12까지 납기</DateSpan>
      <DivisionLine />
      <OrderContent>
        <DetailSapn>도면개수</DetailSapn>
        <RequestSpan> 1개</RequestSpan>
      </OrderContent>
      <OrderContent>
        <DetailSapn>총 수량</DetailSapn>
        <RequestSpan> 1개</RequestSpan>
      </OrderContent>
      <OrderContent>
        <DetailSapn>가공방식</DetailSapn>
        <RequestSpan> 1개</RequestSpan>
      </OrderContent>
      <OrderContent>
        <DetailSapn>재료</DetailSapn>
        <RequestSpan> 1개</RequestSpan>
      </OrderContent>
      <ButtonContainer>
        <RequestDetailBtn>
          <RequestDetailBtnSpan>요청내역 보기</RequestDetailBtnSpan>
        </RequestDetailBtn>
        <ChatBtn>
          <ChatBtnSpan>채팅하기</ChatBtnSpan>
        </ChatBtn>
      </ButtonContainer>
    </CardContainer>
  );
};

export default RequestCard;

const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 356px;
  width: 366px;
  border-radius: 4px;
  padding: 24px 16px;
  outline: solid 1px #e5e5e5;
`;

const ProjectName = styled.span`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 4px;
  font-weight: bold;
`;

const ClientName = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`;

const DateSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
  margin-bottom: 16px;
`;
const DivisionLine = styled.hr`
  width: 334px;
  height: 1px;
  border: 0;
  background-color: #e5e5e5;
  margin-bottom: 32px;
`;

const OrderContent = styled.div`
  margin-bottom: 8px;
`;

const DetailSapn = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  width: 70px;
  margin-right: 32px;
`;

const RequestSpan = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  width: 232px;
  font-weight: 900;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

const RequestDetailBtn = styled.button`
  width: 108px;
  height: 32px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: #2196f3;
  border: none;
`;
const RequestDetailBtnSpan = styled.span`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #ffffff;
`;

const ChatBtn = styled.button`
  width: 72px;
  height: 32px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #2196f3;
`;

const ChatBtnSpan = styled.span`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #2196f3;
`;
