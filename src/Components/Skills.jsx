import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> I have expertise in both front-end and back-end web development using modern technologies.
  <br></br>
    Here are some key skills I've honed over the years</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>FrontEnd Development</h5>
                                <span className="skills-p">HTML,CSS,JavaScript,TypeScript,React.js</span>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Sockets</h5>
                                <span className="skills-p">Socket.io</span>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Database Management</h5>
                                <span className="skills-p">SQL,NoSql,Prisma</span>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Version Control</h5>
                                <span className="skills-p">GitHub</span>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>BackEnd Development</h5>
                                <span className="skills-p">Node.js,Express,TypeScript</span>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Content Management</h5>
                                <span className="skills-p">Strapi</span>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills