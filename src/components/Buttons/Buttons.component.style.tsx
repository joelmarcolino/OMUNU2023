import styled from "styled-components";

const ButtonDefault = styled.button<any>`
  width: ${(props) => props.w};

  height: ${(props) => props.h};

  font-weight: 400;

`;

const ButtonSecondary = styled(ButtonDefault)`
  background-color: #f4f4f4 !important;
  color: #385a64;

  &:hover {
    background-color: #385a64 !important;
    color: #f4f4f4;
  }
`;
const ButtonPrimary = styled(ButtonDefault)`
  background-color: #385a64 !important;
  color: #f4f4f4;

  &:hover {
    background-color: #2e4d57 !important;
    color: #ffffff;
  }
`;
const ButtonWarm = styled(ButtonDefault)`
  background-color: #f5c105 !important;
  color: #fff;

  &:hover {
    background-color: #ffc704 !important;
    color: #ffffff;
  }
`;

export { ButtonDefault, ButtonSecondary, ButtonPrimary, ButtonWarm };
