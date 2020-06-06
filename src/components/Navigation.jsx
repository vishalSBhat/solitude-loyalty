import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarBrand href="/home">
            <img
              className="logo"
              src={logo}
              alt="Solitude"
              height="60px"
              width="60px"
            />
            <span>SOLITUDE</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggleOpen} />
          <Collapse isOpen={open} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink exact className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact className="nav-link" to="/menu">
                  Menu
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
