import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function NavBarComponent(props) {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={navColour ? "sticky" : "navbar__component"}
    >
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar__logo">
            <img src={logo} className="logo" alt="brand" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar__items" id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <NavLink to="/" className="navbar__link">
                Canvas
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/exhibitions" className="navbar__link">
                Exhibitions
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/about" className="navbar__link">
                About
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contact" className="navbar__link">
                Contact
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
