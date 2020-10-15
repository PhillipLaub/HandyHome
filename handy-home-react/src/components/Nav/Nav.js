import React from "react";
import "./Nav.css";
// import Mailto from "reactv16-mailto";

import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Pricing from "../Pricing/Pricing";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

function MyNav() {
  return (
    <div className="nav">
      <Navbar collapseOnSelect expand="lg"  fixed="top" className="navbar-style">
        <Navbar.Brand href="/" component={Home}>
          Handy Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/services" component={Services}>
              Services
            </Nav.Link>
            <Nav.Link href="/pricing" component={Pricing}>
              Pricing
            </Nav.Link>
            <Nav.Link href="/contact" component={Contact}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
