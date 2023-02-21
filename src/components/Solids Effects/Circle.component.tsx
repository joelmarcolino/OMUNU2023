import React from "react";
import {
  Circle,
  Content,
  CircleBottom,
  CircleBottomLeft,
  CircleTopRight,
} from "./Circle.component.style";

export default function CircleTopComponent({
  image,
  width,
  height,
  top,
  type,
  location,
}: any) {
  return (
    <>
      {!location ? (
        <Circle image={image} width={width} height={height} top={top}>
          {type ? (
            <>
              <Content>
                <p className="display-6 title">
                  LIVRO DIGITAL <br /> INFANTIL
                </p>
                <p className="subject">
                  Melhor site para estimular <br /> o cérebro do seu filho com uma
                </p>
                <p className="display-6 subtitle">EXPERIÊNCIA <br /> INTELIGENTE</p>
              </Content>
            </>
          ) : (
            <></>
          )}
        </Circle>
      ) : (
        <CircleTopRight
          image={image}
          width={width}
          height={height}
        ></CircleTopRight>
      )}
    </>
  );
}

export function CircleBottomComponent({ image, width, height, location }: any) {
  return !location ? (
    <>
      <CircleBottom image={image} width={width} height={height}></CircleBottom>
    </>
  ) : (
    <>
      <CircleBottomLeft
        image={image}
        width={width}
        height={height}
      ></CircleBottomLeft>
    </>
  );
}
