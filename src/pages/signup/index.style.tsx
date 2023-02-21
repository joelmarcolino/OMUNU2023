import styled from "styled-components";


export const SignupCard = styled.div`
  margin: 20px;
  padding: 20px;
  height: 700px;
  width: 550px;
  position: relative;
  box-shadow: 0px 0px 8px #00000045;
  z-index: 999999;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  
  .email, .password {
    width: 350px;
    background: #F4F4F4;
    border: 0;
  }
`;

export const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`