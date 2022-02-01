import React from "react";
import { Nav, NavBarContainer, NavLogo } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <h1>Hey</h1>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
