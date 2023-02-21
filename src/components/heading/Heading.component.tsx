import React from "react";
import { Heading, Paragraph } from "./Heading.component.style";

export default function HeadingComponent({ type, children }: any) {
  switch (type) {
    case "h1":
      return (
        <>
          <Heading className="display-6">{children}</Heading>
        </>
      );
    case "text":
      return (
        <>
          <Paragraph className="display-6">{children}</Paragraph>
        </>
      );
    default:
      return <></>;
  }
}
