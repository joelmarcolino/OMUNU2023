import Link from "next/link";
import React from "react";
import { BtnWarmComponent, CircleTopComponent, HeadingComponent, MyImageComponent } from "../../components/Components";
import { ResetPasswordContainer, ResetPasswordCard } from "./index.style";

export default function ChangePasswordPage() {
  return (
    <>
      <CircleTopComponent
        image={"/Ellipse1.png"}
        width={"450px"}
        height={"450px"}
        top={""}
      />
      <ResetPasswordContainer>
        <ResetPasswordCard className="container-fluid d-flex justify-content-center">
          <div className="form">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <HeadingComponent type={"h1"}>Redefinir Senha</HeadingComponent>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control email  shadow-none outline-none border-none p-3"
                  name=""
                  id=""
                  placeholder="Password Antinga"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 ">
                <input
                  type="password"
                  className="form-control password shadow-none outline-none border-none p-3"
                  name=""
                  id=""
                  placeholder="Nova Password"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 text-center ">
                <BtnWarmComponent
                  desc={"Redefinir"}
                  w={"100%"}
                  _className={"p-3"}
                />
              </div>
            </div>
            <div className="row mt-3">
              

              <div className="col-md-12 d-flex justify-content-center">
                <Link href={"/"} className={"text-decoration-none text-dark"}>
                  <small>Voltar</small>
                </Link>
              </div>
             
            </div>
          </div>
        </ResetPasswordCard>
      </ResetPasswordContainer>
    </>
  );
}
