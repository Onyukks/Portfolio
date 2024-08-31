import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/onyeukwu-agbafo-3840bb258" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/Onyukks" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
