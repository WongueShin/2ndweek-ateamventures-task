import styled, { keyframes } from 'styled-components';

export const MainContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  margin-top: 50px;

  @media (max-width: 425px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const BlankDiv = styled.div`
  width: 1130px;
  height: 100px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  text-align: center;
  @media (max-width: 425px) {
    width: 288px;
    margin: 0 auto;
  }
`;

export const BlankSpan = styled.span`
  color: #939fa5;
  line-height: 100px;
`;

export const LoadingDiv = styled(BlankDiv)`
  border: none;
`;

const rotation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const LoadingCircle = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 10px solid #c2c2c2;
  border-top: 10px solid black;
  border-radius: 50em;
  animation: ${rotation} 0.2s linear infinite;
  animation-duration: 0.8s;
`;


