import styled from "styled-components";

export const Circle = styled.div<any>`
  top: ${(props) => props.top};
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  float: right;
  right: 0;
  position: absolute;
`;

export const CircleBottom = styled(Circle)`
  float: left;
  left: 0;
  bottom: 0;
  position: fixed;
`;

export const Content = styled.div`
  padding: 20px;

  .title {
    color: #fff;
    font-weight: 800;
    padding-left: 30px;
  }

  .subtitle {
    color: #c8c8c8;
    font-weight: 700;
    padding-left: 30px;
  }

  .subject {
    color: #eee8e8;
    font-size: 1.3rem;
    line-height: 26px;
    padding-left: 30px;
  }
`;
