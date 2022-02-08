import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 356px;
  width: 366px;
  border-radius: 4px;
  padding: 24px 16px;
  outline: solid 1px #e5e5e5;
  :hover {
    outline: solid 2px #2196f3;
  }
`;

export const StatusDiv = styled.div`
  position: absolute;
  right: 16px;
  width: 50px;
  height: 20px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  text-align: center;
`;

export const StatusSpan = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: #ffa000;
`;
export const ProjectTitle = styled.span`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const ClientName = styled.div`
  line-height: 20px;
  margin-bottom: 24px;
`;

export const DueDateSpan = styled.span`
  line-height: 20px;
  color: #939fa5;
  margin-bottom: 16px;
`;
export const DivisionLine = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #e5e5e5;
  margin: 0;
  margin-bottom: 31px;
`;

export const OrderContent = styled.div`
  margin-bottom: 8px;
`;

export const DetailSapn = styled.span`
  display: inline-block;
  line-height: 20px;
  height: 20px;
  width: 70px;
  margin-right: 32px;
`;

export const RequestSpan = styled.span`
  display: inline-block;
  line-height: 20px;
  height: 20px;
  width: 232px;
  font-weight: 900;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
`;

export const RequestDetailBtn = styled.button`
  width: 108px;
  height: 32px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: #2196f3;
  border: none;
`;
export const RequestDetailBtnSpan = styled.span`
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: #ffffff;
`;

export const ChatBtn = styled.button`
  width: 72px;
  height: 32px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #2196f3;
`;

export const ChatBtnSpan = styled.span`
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: #2196f3;
`;
