import { faCopyright, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import {
  BtnPrimaryComponent,
  BtnSecondaryComponent,
  CircleTopComponent,
  HomeNavbarComponent,
} from "../../components/Components";
import { Description } from "./Home.page.style";

export default function HomePage() {
  return (
    <>
      <div className="container-fluid p-0">
        <HomeNavbarComponent />

        <CircleTopComponent
          image={"/Ellipse1.png"}
          width={"450px"}
          height={"450px"}
          top={""}
          type={"default"}
        />
      </div>
      <div>
        <CircleTopComponent
          image={"/Ellipse2.png"}
          width={"100px"}
          height={"400px"}
          top={"320px"}
        />
      </div>
      <div className="container">
        <Description className="col-md-12 col-sm-12">
          <div className="content ">
            <Link href={"login"}>
              <BtnSecondaryComponent
                desc={"Autenticar-se"}
                _className={""}
                icon={""}
              />
            </Link>

            <Link href={"signup"}>
              <BtnPrimaryComponent desc={"Criar Conta"} _className={"ms-3"} />
            </Link>
          </div>
        </Description>
      </div>
      <div className="container pt-4">
        <div className="row ">
          <p className="text-center">
            <FontAwesomeIcon icon={faCopyright} />
            {" Copyrights " + new Date().getFullYear() + ", Omunu "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
          </p>
        </div>
      </div>
    </>
  );
}
