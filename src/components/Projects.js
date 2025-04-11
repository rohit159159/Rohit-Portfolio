import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg"

import projImg3 from "../assets/img/project3.jpg";
import projImg5 from "../assets/img/project5.jpg";
import projImg6 from "../assets/img/project6.jpg";
import certImg1 from "../assets/img/certImg1.png";
import certImg2 from "../assets/img/certImg2.jpg"
import certImg3 from "../assets/img/certImg3.png";
import certImg4 from "../assets/img/certImg4.jpg"
import certImg5 from "../assets/img/certImg5.jpg"
import certImg6 from "../assets/img/certImg6.jpg"
import certImg7 from"../assets/img/certImg7.png.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Paragraph } from "react-bootstrap-icons";

export const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Hospital-Management-System",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Quiz & learning Platform",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const certifications = [
    {
      title: "Java Programming",
      description: "Shreyians Coding School",
      imgUrl: certImg1,
    },
    {
      title: "AWS Cloud Practitioner",
      description: "RamrajTech",
      imgUrl: certImg2,
     
    },
  
    {
      title: "Linkedin Learning",
      description: "Career Essentials in Gen-AI",
      imgUrl: certImg4,
    },
    {
      title: "Web Development Fundamentals",
      description: "IBM SkillsBuild",
      imgUrl: certImg7,
     
    },
    {
      title: "Software Development",
      description: "Use Gen-AI for Software Development",
      imgUrl: certImg5,
     
    },
    {
      title: "C/C++ Programming",
      description: "Ramraj Tech internship",
      imgUrl: certImg6,
     
    },
    {
      title: "Open University",
      description: "Effective Communication",
      imgUrl: certImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects & Certifications</h2>
                  <p>
                    Every project is an opportunity to learn, to figure out problems and challenges,
                    to invest and reinvent. Challenges are what makes life interesting, and overcoming them is what makes life meaningful.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certificate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {certifications.map((cert, index) => (
                            <ProjectCard key={index} {...cert} />
                          ))}
                      </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <div className="text-center">
                       <p>You can download my resume below:</p>
                       <a href="/MyResume.pdf" download className="btn btn-primary"
                       style={{
                       padding: "10px 20px",
                       fontSize: "16px",
                       borderRadius: "8px",
                       marginTop: "10px",
                       display: "inline-block"
                       }} >
                            Download Resume
                        </a>
                     </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
}


