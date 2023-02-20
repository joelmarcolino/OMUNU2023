import {
  faCopyright,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BtnDefaultComponent,
  BtnPrimaryComponent,
  BtnSecondaryComponent,
  BtnWarmComponent,
  CircleComponent,
  HomeNavbarComponent,
  MyImageComponent,
} from "../../components/Components";
import { Description } from "./Home.page.style";

export default function HomePage() {
  return (
    <>
      <div className="container-fluid p-0">
        <HomeNavbarComponent />

        <CircleComponent
          image={"/Ellipse1.png"}
          width={"450px"}
          height={"350px"}
          top={""}
          type={"default"}
        />
      </div>
      <div>
        <CircleComponent
          image={"/Ellipse2.png"}
          width={"100px"}
          height={"400px"}
          top={"320px"}
        />
      </div>
      <div className="container">
        <Description className="col-md-12 col-sm-12">
          <div className="content ">
            <BtnPrimaryComponent
              desc={"Autenticar-se"}
              _className={""}
              icon={""}
            />
            <BtnWarmComponent desc={"Criar Conta"} _className={"ms-3"} />
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
