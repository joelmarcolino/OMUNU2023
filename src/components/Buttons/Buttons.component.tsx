import React from "react";
import { ButtonDefault, ButtonPrimary, ButtonSecondary, ButtonWarm } from "./Buttons.component.style";

export const BtnDefaultComponent = ({ desc, _className, w = 100, h = 100 }: any) => {

      return (
        <ButtonDefault className={"btn " + _className } h={h} w={w}>
          {desc}
        </ButtonDefault>
      )
};

export const BtnPrimaryComponent = ({ desc, _className, w = 100, h = 100 }: any) => {

  return (
    <ButtonPrimary className={"btn " + _className } h={h} w={w}>
      {desc}
    </ButtonPrimary>
  )
};

export const BtnSecondaryComponent = ({ desc, _className, w = 100, h = 100 }: any) => {

    return (
      <ButtonSecondary className={"btn " + _className } h={h} w={w}>
        {desc}
      </ButtonSecondary>
    )
};

export const BtnWarmComponent = ({ desc, _className, w = 100, h = 100 }: any) => {

  return (
    <ButtonWarm className={"btn " + _className } h={h} w={w}>
      {desc}
    </ButtonWarm>
  )
};