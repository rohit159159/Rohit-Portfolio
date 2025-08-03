import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/background03.png";
import experienceIcon from "../assets/img/experience.png"; // Use the correct image name
import educationIcon from "../assets/img/education.png"; // Use the correct image name
import { Link } from "react-bootstrap-icons";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h5>I have worked with all of these technologies and frameworks <br/>
                and I keep learning outside the university taking different courses that teach me new technologies.</h5>
              <div className="experience">
              </div>
              <Carousel responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={3000} 
                className="owl-carousel owl-theme skill-slider">   
                <div className="item">
                  <img src={meter1} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="SQL/PostgreSQL/MySql" />
                  <h5>SQL/MySql</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="C++" />
                  <h5>C++</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
