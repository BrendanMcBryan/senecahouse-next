import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import shLogo from "../public/assets/images/SenecaHouse-Logo.png";

function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand href="#" >
          <Image src={shLogo} layout="intrinsic" width={200}  height={82} alt="Seneca House Logo" />
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#Floorplans">Floor Plans</Nav.Link>
            <Nav.Link href="/#Features">Residences Features</Nav.Link>
            <Nav.Link href="/#Gallery">Gallery</Nav.Link>
            <Nav.Link href="/#Neighborhood">Neighborhood</Nav.Link>
            <Nav.Link href="/#About">About</Nav.Link>
            <Nav.Link href="/#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
