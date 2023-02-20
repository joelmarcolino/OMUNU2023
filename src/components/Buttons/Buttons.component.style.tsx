import styled from "styled-components";

const ButtonDefault = styled.button<any>`
  width: ${(props) => props.w};

  height: ${(props) => props.h};

`;

const ButtonSecondary = styled(ButtonDefault)`
    background-color: #273c75 !important;
    color: #fff;

    &:hover{
        background-color: #273c75ed !important;
    }
    
`

export { ButtonDefault, ButtonSecondary };
