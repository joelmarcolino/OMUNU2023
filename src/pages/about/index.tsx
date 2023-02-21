import React from "react";
import {
  CircleBottomComponent,
  CircleTopComponent,
  HeadingComponent,
  HomeNavbarComponent,
} from "../../components/Components";

import { DescriptionImg, AboutCard } from "./index.style";

export default function About() {
  const description =
    "Entra na onda e descobre a magia infantil com frases e livros para alunos vinculado no âmbito da educação para o desenvolvimento de escrituras dando assim aberturas para leitores infantis no contexto e nos exercícios propostos na educação infantil, com a finalmente de criar crianças com incentivo de inovação no processo da educação.";

  return (
    <>
      <HomeNavbarComponent />
      <div className="container-fluid">
        <CircleTopComponent 
          image={"/Ellipse4.png"}
          width={"100px"}
          height={"400px"}
          top={""}
        />

        <CircleBottomComponent
          image={"/Ellipse5.png"}
          width={"500px"}
          height={"400px"}
        />
      </div>
      <div className="container">
        <AboutCard className="row">
          <div className="col-md-12">
            <HeadingComponent type={"h1"}>Omunu</HeadingComponent>
          </div>
          <div className="col-sm-6 col-md-6 pt-5">
            <HeadingComponent type={"text"}>{description}</HeadingComponent>
          </div>
          <div className="col-sm-6 col-md-6">
            <DescriptionImg></DescriptionImg>
          </div>
        </AboutCard>
      </div>
    </>
  );
}
