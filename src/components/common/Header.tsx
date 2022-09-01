import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header_component">
      <div className="top-header">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall />
              <a href="tel:09655555555">09655555555</a>
            </li>
            <li>
              <FaRegEnvelope />{" "}
              <a href="mail-to:support@fvaly.com">support@fvalyyy.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="#">Save big on our app!</a>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
