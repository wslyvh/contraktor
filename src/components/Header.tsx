
import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="/">Contraktor</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="/explore">Explore</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
