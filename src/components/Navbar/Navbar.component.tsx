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
              <MyImageComponent
                name={"/Logo omomu.png"}
                width={200}
                height={200}
              />
            </a>
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex={-1}
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
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
                <div className="d-flex" role="search">
                  <BtnSecondaryComponent
                    desc={btnDescription}
                    w="245px"
                    h="40px"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Navbar>
    </>
  );
}
