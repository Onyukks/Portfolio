import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/social.png";
import projImg2 from "../assets/img/estate.png";
import projImg3 from "../assets/img/netflix.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="project-header">Projects</h2>
                <p className="project-desc">Explore some of the key projects I've built during my journey as a full-stack developer. From dynamic web applications to modern user interfaces, each project reflects my passion for solving real-world problems with code. Click on the tabs below to view detailed previews and access the code on GitHub. These projects are just a sample of some of my work; for a complete view of all my projects, please visit my GitHub
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                         <Container>
                            <div className="proj-imgbx">
                               <img src={projImg1} />
                               <div className="proj-txtx">
                                   <h1 className="detailes-header">Social Media Application</h1>
                                   <span>Design & Development</span>
                                  <span></span>
                                </div>
                            </div>
                            <div className="project-details">
                                <h2>Social Media Application</h2>
                                <p>This is a Social Media Application that offers a dynamic platform for users to connect and engage with others. It features robust friend management capabilities, allowing users to send, accept, or reject friend requests and maintain an organized friend list. Users can personalize their profiles with profile and cover photos, managed effortlessly through Cloudinary. The application enables users to create posts with images and videos. Real-time chat functionality ensures seamless communication with friends, complete with instant messaging. Users can also see which friends are online and easily search for others by name or username, enhancing connectivity and interaction within the platform.</p>
                                <div className="projectButtons">
                                <a href="https://social-media-sk8x.onrender.com" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-primary me-3">Live Preview</button>
                </a>
                <a href="https://github.com/Onyukks/Social_Media" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-warning">View Source Code</button>
                </a>
                                </div>
                            </div>
                         </Container>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Container>
                            <div className="proj-imgbx">
                               <img src={projImg2} />
                               <div className="proj-txtx">
                                   <h1 className="detailes-header">Real Estate Application</h1>
                                   <span>Design & Development</span>
                                  <span></span>
                                </div>
                            </div>
                            <div className="project-details">
                                <h2>Real Estate Application</h2>
                                <p>This Real Estate Management System provides a comprehensive platform for users to explore, create, and manage property listings. Users can effortlessly create an account and browse available residencies, with powerful search and filter options to find the perfect property. Property owners can list their own residencies, complete with detailed information and images. The platform also includes real-time chat functionality, enabling direct communication between users and property owners, fostering seamless interactions for inquiries and negotiations.</p>
                                <div className="projectButtons">
                                <a href="https://real-estate-c8pd.onrender.com" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-primary me-3">Live Preview</button>
                </a>
                <a href="https://github.com/Onyukks/Real_Estate" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-warning">View Source Code</button>
                </a>
                                </div>
                            </div>
                         </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Container>
                            <div className="proj-imgbx">
                               <img src={projImg3} />
                               <div className="proj-txtx">
                                   <h1 className="detailes-header">Netflix Clone</h1>
                                   <span>Design & Development</span>
                                  <span></span>
                                </div>
                            </div>
                            <div className="project-details">
                                <h2>Netflix Clone</h2>
                                <p>This Netflix Clone offers an immersive platform for users to explore and stream a wide variety of movies and TV series. After creating an account and logging in, users can browse trending content, categorized into genres and themes like Now Playing, Top Rated, Popular, and Upcoming Movies, as well as Airing Today, On the Air, and Top Rated TV shows. The platform allows users to watch trailers, search for specific movies, TV shows, or even actors, and discover similar content based on their preferences. Users can also view their search history and manage it by deleting past searches for a personalized experience.</p>
                                <div className="projectButtons">
                                <a href="https://netflix-clone-r727.onrender.com" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-primary me-3">Live Preview</button>
                </a>
                <a href="https://github.com/Onyukks/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-warning">View Source Code</button>
                </a>
                                </div>
                            </div>
                         </Container>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects