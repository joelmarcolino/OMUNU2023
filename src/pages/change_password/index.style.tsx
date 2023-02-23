import styled from "styled-components";



export const ResetPasswordCard = styled.div`
  margin: 20px;
  padding: 20px;
  height: 550px;
  width: 550px;
  position: relative;
  box-shadow: 0px 0px 8px #00000045;
  background: #fff;

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

export const ResetPasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`