import React from "react";
import { Circle, Content, CircleBottom } from "./Circle.component.style";

export default function CircleComponent({
  image,
  width,
  height,
  top,
  type,
}: any) {
  return (
    <>
      <Circle image={image} width={width} height={height} top={top}>
        {type ? (
          <>
            <Content>
              <p className="display-6 title">
                LIVRO DIGITAL <br /> INFANTIL
              </p>
              <p className="subject">
                Melhor site para estimular o cérebro do seu filho com uma
              </p>
              <p className="display-6 subtitle">EXPERIÊNCIA INTELIGENTE</p>
            </Content>
          </>
        ) : (
          <></>
        )}
      </Circle>
    </>
  );
}

export function CircleBottomComponent({
  image,
  width,
  height,
}: any) {
  return (
    <>
      <CircleBottom image={image} width={width} height={height} >
      </CircleBottom>
    </>
  );
}
