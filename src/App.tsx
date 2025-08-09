import React, { useState } from "react";
import SkillsCard from "./components/SkillsCard";
import ProjectsSection from "./components/ProjectsSection";
import ContactLeft from "./components/ContactLeft";
import ContactRight from "./components/ContactRight";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
// import UseTextToSpeech from "./components/UseTextToSpeech";
import TextToSpeechControls from "./components/TextToSpeechControls "
import myText from "../input.ts"




function App(props) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);



  function handleClick(): void {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="">
      <p>{props.town}</p>
      <div className={`container ${menuOpen === true ? "change" : ""}`}>
        {/* // Navigation */}
        <Icon onClick={handleClick}/>
    

        <nav className="navigation">
          <div className="section-border"></div>
          <div className="nav-items">
            <a href="#about-me">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects-section">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        {/* // Navigation //landing // Josue */}
        <section className="landing" id="about-me">
          <h1 className="section-bg-heading">Website showcase</h1>
          <div className="logo">
            <span>Web</span>
            <span>Dev</span>
          </div>
          <div className="banner">
            <div className="section-border"></div>
            <div className="developer-info">
              <h3 className="greeting">
                Hello, <span>my name is</span>
              </h3>
              <h1 className="name">
                <span>Josue</span> Juré
              </h1>
              <h3 className="prof">
                I am <span>a Web Developer</span>
              </h3>
              <p className="about">
               {myText}
              </p>

              <TextToSpeechControls/>
 
              <div className="social-media">
                <a href="https://linkedin.com/in/josué-jure-3799b9127">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/josueJURE">
                  <i className="fa-brands fa-github"></i>
                </a>
                {/* <a href="https://codewars.com/users/josueJURE">
                  <i className="">codewars</i>
                </a> */}
              </div>
              <div className="cv">
                <button className="btn cv-btn">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="./resume/CV.docx.pdf"
                    download
                  >
                    Download CV
                  </a>
                </button>
                <span>My Skill</span>
              </div>
            </div>
            <div className="developer-img">
              <div className="dev-img-wrapper">
                <img src="images/me.jpg" alt="" />
              </div>
              <div className="dev-experience dev-work">
                <span>10+</span>
                <span>projects completed</span>
              </div>
              <div className="dev-projects dev-work">
                <span>570+</span>
                <span>Katas completed</span>
              </div>
            </div>
          </div>
        </section>
        {/* // End of landing // Skills */}
        <section className="skills" id="skills">
          <h1 className="section-bg-heading">My Skills</h1>
          <h1 className="section-heading">Professional Skills</h1>
          <h3 className="sub-heading">
            My <span>Skills</span>
          </h3>
          <div className="section-border"></div>

          <SkillsCard />
        </section>
        {/* // End of Skills // Projects */}

        <ProjectsSection />
        {/* // End of Projects // Contact */}
        <section className="contact" id="contact">
          <h1 className="section-bg-heading">Contact Me</h1>
          <h1 className="section-heading">Contact</h1>
          <h3 className="sub-heading">
            Let's <span>Have Some Talk</span>
          </h3>
          <div className="section-border"></div>
          <div className="contact-content">
            <ContactLeft />
            <ContactRight />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
