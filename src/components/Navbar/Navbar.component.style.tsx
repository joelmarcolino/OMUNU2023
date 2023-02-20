import styled from "styled-components";

const Navbar = styled.div`
  box-shadow: 0px 0px 1px #385A64;
  padding-left: 30px;
  padding-right: 30px;
`;

const Menu = styled.ul`
  .nav-link {
    color: #385A64 !important;
    font-size: 1.1rem;
  }

  .active {
    color: #385A64 !important;
    font-weight: 550 !important;
  }
`;

const Item = styled.li``;

export { Menu, Item, Navbar };
