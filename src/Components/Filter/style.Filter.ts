import styled from "styled-components";

export const Container = styled.div`
  /* width: 90%; */
  margin: auto;
  margin-top: 110px;
  line-height: 1.6;

  h3 {
    color: #323d45;
    font-size: 20px;
    margin: 0;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
`;

export const OverFlowContainer = styled.div`
  overflow: hidden;
`;

export const FilterZone = styled.div`
  display: flex;
  height: 34px;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SelectContainer = styled.div``;

export const SelectDefault = styled.span<{ isOpen: boolean }>`
  display: flex;
  width: 98px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #939fa5;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isOpen ? "#1565C0" : "#fff")};
  color: ${(props) => (props.isOpen ? "#fff" : "#000")};
`;

export const ArrowIcon = styled.span`
  color: #939FA5;
`

export const SelectZone = styled.div`
  display: flex;
`;

export const SelectBox = styled.ul<{ isOpen: boolean }>`
  transform: translateY(${(props) =>
    props.isOpen ? "0px" : "-200px"}) !important;
  transition 0.25s ease-in;
  padding: 10px 6px;
  list-style: none;
  width: 130px;
  border-radius: 4px;
  border: 1px solid #939fa5;
  margin-right: 8px;
  visibility: ${(props) => (props.isOpen ? `visible` : `hidden`)}

  & #select {
    width: 18px;
    height: 18px;
    border: 2px solid ##939fa5;
    border-radius: 2px;
  }
  & li {
    line-height: 1.5;
    font-weight: 500;
  }

  & label {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

export const ResetBtn = styled.div`
  width: 16px;
  height: 16px;
  background-size: cover;
  background-image: url("images/refresh.png");
  margin-right: 12px;
`;

export const ResetContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const ResetMessage = styled.span`
  font-size: 12px;
  color: #2196f3;
`;

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  top: 10px;
`;

export const ToggleBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 15px;
  background: #c2c2c2;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -7px;
    left: -7px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 3px;
    background: #f5f5f5;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const ToggleBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 34px;
  height: 14px;
  &:checked + ${ToggleBoxLabel} {
    background: #bbdefb;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: -2px;
      background: #2196f3;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const ToggleMessage = styled.span`
  margin-left: 16px;
  color: #323d45;
  font-weight: 800;
  transform: translateY(-10px);
`;
