import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall, FiShoppingBag } from "react-icons/fi";
import logo from "../../assets/images/fvaly.png";
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
              <a href="mail-to:support@fvaly.com">support@fvaly.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="#">Save big on our app!</a>
          </div>
        </Container>
      </div>
      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-3">
            <img className="branding" src={logo} alt="Fvaly" />
            <InputGroup className="mb-3">
              <Form.Control
                className="border border-primary"
                placeholder="Search Here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="list-icon list-unstyled d-flex gap-3 py-3">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Newsfeed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
