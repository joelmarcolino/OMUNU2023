import styled from "styled-components";

const Navbar = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  background-color: #fff;
  border: 1px solid;

  .fixed-top {
    z-index: 999999999;
    background-color: #fff;
    box-shadow: 0px 0px 1px #385a64;
  }
`;

const Menu = styled.ul`
  .nav-link {
    color: #385a64 !important;
    font-size: 1.1rem;
  }

  .active {
    color: #385a64 !important;
    font-weight: 550 !important;
  }
`;

const Item = styled.li``;

export { Menu, Item, Navbar };
