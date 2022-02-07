import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
