import React from "react";
import { ButtonDefault, ButtonSecondary } from "./Buttons.component.style";

export const BtnDefault = ({ desc, _className, w = 100, h = 100 }: any) => {

      return (
        <ButtonDefault className={"btn " + _className } h={h} w={w}>
          {desc}
        </ButtonDefault>
      )
};

export const BtnSecondary = ({ desc, _className, w = 100, h = 100 }: any) => {

    return (
      <ButtonSecondary className={"btn " + _className } h={h} w={w}>
        {desc}
      </ButtonSecondary>
    )
};