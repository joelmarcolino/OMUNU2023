import Link from "next/link";
import React from "react";
import {
  BtnWarmComponent,
  CircleBottomComponent,
  CircleTopComponent,
  HeadingComponent,
} from "../../components/Components";
import { SignupCard, SignupContainer } from "./index.style";

export default function Signup() {
  return (
    <>
      
      <CircleTopComponent
        image={"/Ellipse8.png"}
        width={"250px"}
        height={"400px"}
      />

      <SignupContainer className="container-fluid">
        <SignupCard className="container">
          <div className="form">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <HeadingComponent type={"h1"}>Criar conta</HeadingComponent>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control email  shadow-none outline-none border-none p-3"
                  name=""
                  id=""
                  placeholder="Nome Completo"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 ">
                <input
                  type="date"
                  className="form-control password shadow-none outline-none border-none p-3"
                  name=""
                  id=""
                  placeholder="Data de Nascimento"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 ">
                <input
                  type="email"
                  className="form-control password shadow-none outline-none border-none p-3"
                  name=""
                  id=""
                  placeholder="Email"
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
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 text-center ">
                <BtnWarmComponent
                  desc={"Criar"}
                  w={"100%"}
                  _className={"p-3"}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">
                <Link
                  href={"login"}
                  className={"text-decoration-none text-dark"}
                >
                  <small>Tenho uma conta</small>
                </Link>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <Link href={"/"} className={"text-decoration-none text-dark"}>
                  <small>Voltar</small>
                </Link>
              </div>
            </div>
          </div>
        </SignupCard>
      </SignupContainer>
      
      <CircleBottomComponent
        image={"/Ellipse9.png"}
        width={"350px"}
        height={"200px"}
      />
    </>
  );
}
