import styled from "styled-components";

export const DescriptionImg = styled.div`
  position: relative;
  height: 450px;
  background-image: url("about.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  display: flex;
  margin-bottom: 20px;

  z-index: 999999;
`;

export const AboutCard = styled.div`
  margin: 20px;
  padding: 20px;
  margin-top: 145px;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 4px #385a64;
  z-index: 999999;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;
