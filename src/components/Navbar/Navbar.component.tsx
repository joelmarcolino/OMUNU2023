import { BtnSecondary, MyImageComponent } from "@/components/components";
import Link from "next/link";
import React, { useState } from "react";
import { navMenu } from "../types/header.type";
import { Item, Menu } from "./Navbar.component.style";

export function HomeNavbar() {
  return <div>HomeNavbar</div>;
}

export function HomeNavbarTransparent() {
  const [menu, updateMenu] = useState<Array<navMenu>>([
    {
      desc: "Home",
      active: true,
    },
    {
      desc: "Páginas",
      active: false,
    },
    {
      desc: "Serviços",
      active: false,
    },
    {
      desc: "Preçário",
      active: false,
    },
    {
      desc: "Adesão",
      active: false,
    },
  ]);

  const btnDescription = "Entrar";

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <MyImageComponent name={"/logo.png"} width={210} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              {menu.map((item, index) => {
                return (
                  <>
                    <Item className="nav-item">
                      <Link
                        className={ item.active ? "nav-link active" : "nav-link"}
                        href="#"
                      >
                        {item.desc}
                      </Link>
                    </Item>
                  </>
                );
              })}
            </Menu>

            <div className="d-flex" role="search">
              <BtnSecondary desc={btnDescription} w="125px" h="40px" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
