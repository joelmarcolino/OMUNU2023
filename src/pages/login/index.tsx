import React from "react";
import {
  BtnWarmComponent,
  CircleBottomComponent,
  CircleTopComponent,
  MyImageComponent,
} from "../../components/Components";
import { LoginCard, LoginContainer } from "./index.style";

export default function Login() {
  return (
    <>
      <CircleTopComponent
        image={"/Ellipse6.png"}
        width={"350px"}
        height={"300px"}
        location={true}
      />
      <LoginContainer className="container-fluid">
        <LoginCard className="container">
          <div className="form">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <MyImageComponent
                  name={"/login.png"}
                  width={120}
                  height={100}
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control email  shadow-none outline-none border-none p-3"
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
                <BtnWarmComponent desc={"Entrar"} w={"100%"} _className={"p-3"}/>
              </div>
            </div>
          </div>
        </LoginCard>
      </LoginContainer>
      <CircleBottomComponent
        image={"/Ellipse7.png"}
        width={"300px"}
        height={"300px"}
        location={true}
      />
    </>
  );
}
