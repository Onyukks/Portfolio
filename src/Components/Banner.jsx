import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h2>Hi! I am Agbafo Onyeukwu. I am a Full Stack Developer</h2>
                  <p>Welcome to my portfolio! I'm a passionate full-stack developer with hands-on experience in building efficient and scalable web applications using modern technologies. With expertise in the MERN stack, I enjoy crafting both front-end and back-end solutions that solve real-world problems. Explore my projects and see how I bring ideas to life through code</p>
                  <a href="/My_CV.pdf" download="My_CV.pdf">
                   <button className="btn btn-primary">Download CV</button>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner