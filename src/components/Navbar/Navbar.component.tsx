import Link from "next/link";
import React, { useState } from "react";
import { BtnSecondaryComponent, MyImageComponent } from "../Components";
import { navMenu } from "../types/header.type";
import { Item, Menu, Navbar } from "./Navbar.component.style";

export function HomeNavbarComponent() {
  const [menu, updateMenu] = useState<Array<navMenu>>([
    {
      desc: "Home",
      active: true,
    },
    {
      desc: "Livros",
      active: false,
    },
    {
      desc: "Sobre",
      active: false,
    },
  ]);

  const btnDescription = "Comunidade de apoio";

  return (
    <>
      <Navbar>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <MyImageComponent name={"/Logo omomu.png"} width={200} height={200}/>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Menu className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                {menu.map((item, index) => {
                  return (
                    <>
                      <Item className="nav-item ps-4 pe-4">
                        <Link
                          className={
                            item.active ? "nav-link active" : "nav-link"
                          }
                          href="#"
                        >
                          {item.desc}
                        </Link>
                      </Item>
                    </>
                  );
                })}
              </Menu>
            </div>
            
          </div>
          <div className="d-flex" role="search">
              <BtnSecondaryComponent desc={btnDescription} w="245px" h="40px" />
            </div>
        </nav>
      </Navbar>
    </>
  );
}
