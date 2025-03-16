import "./App.css";
import SkillsCard from "./components/SkillsCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        // Navigation
        <div className="menu-icon">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
        <nav className="navigation">
          <div className="section-border"></div>
          <div className="nav-items">
            <a href="#about-me">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects-section">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        // Navigation //landing // Josue
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
                After completing a 12-week bootcamp, building various personal
                projects, including a full-stack application that integrates the
                OpenAI API, I am now volunteering as a software developer for a
                charity to gain valuable experience and do some good. I'm
                learning a lot from the mid-level developer I'm working with. I
                also volunteer as a software coach at Codebar, a charity
                supporting aspiring developers. Having to articulate my thoughts
                has made me a better communicator and has also deepened my
                understanding of some programming concepts. Have a look at my
                projects below, and then reach out to me!
              </p>
              <div className="social-media">
                <a href="https://linkedin.com/in/josué-jure-3799b9127">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/josueJURE">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://codewars.com/users/josueJURE">
                  <i className="">codewars</i>
                </a>
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
        // End of landing // Skills
        <section className="skills" id="skills">
          <h1 className="section-bg-heading">My Skills</h1>
          <h1 className="section-heading">Professional Skills</h1>
          <h3 className="sub-heading">
            My <span>Skills</span>
          </h3>
          <div className="section-border"></div>
          {/* <div className="skills-cards">
           
            <div className="skills-card">
              <div className="skill">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <p>
                Mastery in HTML is the cornerstone of my web development
                journey. With over a year of self-teaching, I've honed my skills
                in creating clean, semantic, and well-structured HTML, ensuring
                a solid foundation for every project.
              </p>
              <div className="skills-card-progress"></div>
            </div> 
            <div className="skills-card">
              <div className="skill">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <p>
                My CSS skills extends beyond styling; it's about creating
                visually appealing and responsive designs. Through self-guided
                learning, I've become adept at leveraging CSS to transform
                static layouts into engaging and user-friendly interfaces.
              </p>
              <div className="skills-card-progress"></div>
            </div>
            <div className="skills-card">
              <div className="skill">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <p>
                JavaScript is where I thrive in adding interactivity and
                dynamism to web applications. Over the past year, I've immersed
                myself in the language to master ES6 concepts.
              </p>
              <div className="skills-card-progress"></div>
            </div>
            <div className="skills-card">
              <div className="skill">
                <span>TypeScript</span>
                <span>75%</span>
              </div>
              <p>
                After mastering JavaScript, learning TypeScript felt like the
                next natural step. I now understand how using types can prevent
                bugs from propagating into the codebase
              </p>
              <div className="skills-card-progress"></div>
            </div>
            <div className="skills-card">
              <div className="skill">
                <span>Node.js and Express</span>
                <span>85%</span>
              </div>
              <p>
                The dynamic duo of Node.js and Express has revolutionized my web
                development workflow. With Node.js as the backbone, I can
                leverage JavaScript's versatility on the server-side, unlocking
                a seamless coding experience.
              </p>
              <div className="skills-card-progress"></div>
            </div>
            <div className="skills-card">
              <div className="skill">
                <span>ChatGPT OpenAI API </span>
                <span>75%</span>
              </div>
              <p>
                The ChatGPT OpenAI API is a recent technology that's captured my
                interest. I've integrated it into at least two of my projects,
                and the results have been nothing short of remarkable.
              </p>
              <div className="skills-card-progress"></div>
            </div>
            <div className="skills-card">
              <div className="skill">
                <span>React</span>
                <span>50%</span>
              </div>
              <p>
                Since starting to volunteer with CAFOD, I've learned a lot more
                about React and React hooks such as useContext. I've also been
                exposed to React libraries and frameworks such as Next.js and
                Shadcn, respectively
              </p>
              <div className="skills-card-progress"></div>
            </div>
          </div> */}
          <SkillsCard/>
        </section>
        // End of Skills // Projects
        <section className="projects" id="projects-section">
          <h1 className="section-bg-heading">My Projects</h1>
          <h1 className="section-heading">Portfolio</h1>
          <h3 className="sub-heading">
            My <span>Projects</span>
          </h3>
          <div className="projects-cards">
            <div className="project-card">
              <div className="project-img">
                <img src="images/project2.png" />
              </div>

              <video src="video/recipe_app_video.mp4" controls></video>
              <div className="techs">
                <span>recorded by my co-developer</span>
                <span>TypeScript,</span>
                <span>HTML,</span>
                <span>CSS</span>
              </div>
              <h3 className="project-name">ChatGPT recipe-app video</h3>

              <p className="project-desc">
                After completing my 12-week bootcamp, one of my classmates and I
                teamed up to build an AI-powered recipe application. Watching
                the video will allow you to see all of the features the
                application has.
              </p>
              <button type="button" className="project-btn">
                <a href="https://github.com/fac29b/recipe-for-success">
                  See Codebase{" "}
                </a>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="project-card">
              <div className="project-img">
                <img src="images/Designer_2.png" />
              </div>
              <div className="techs">
                <span>HTML,</span>
                <span>CSS,</span>
                <span>JavaScript</span>
              </div>
              <h3 className="project-name">ChatGPT recipe-app</h3>
              <p className="project-desc">
                Recipe For Success is a web application that generates
                personalised recipes based on user preferences and dietary
                restrictions. Utilising the OpenAI API for text and image
                generation, this app provides unique recipes complete with
                AI-generated images
              </p>
              <button type="button" className="project-btn">
                <a href="https://recipe-for-success.onrender.com">
                  See Project{" "}
                </a>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="project-card">
              <div className="project-img">
                <img src="images/shopping_cart3.webp" />
              </div>

              <div className="techs">
                <span>React,</span>
                <span>TypeScript,</span>
                <span>HTML,</span>
                <span>Bootstrap</span>
              </div>
              <h3 className="project-name">Shopping Cart</h3>
              <p className="project-desc">
                This project, written in React and TypeScript, gave me the
                opportunity to learn about the useContext React hook, which in
                some cases proves to be a better alternative to prop drilling. I
                use Supabase as a backend service to store my data. It is still
                a work in progress.
              </p>
              <button type="button" className="project-btn">
                <a href="https://shopping-cart-jj.vercel.app/">See Project </a>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="project-card">
              <div className="project-img">
                <img src="images/project2.png" />
              </div>
              <div className="techs">
                <span>TypeScript,</span>
                <span>HTML,</span>
                <span>CSS</span>
              </div>
              <h3 className="project-name">Calculator</h3>
              <p className="project-desc">
                My main goal is to rewrite the same calculator in Python, a
                programming language I'm learning. This will not only reinforce
                my understanding of Python syntax, but also allow me to compare
                and contrast the different approaches between TypeScript and
                Python in building similar applications.
              </p>
              <button type="button" className="project-btn">
                <a href="https://josuejure.github.io/TypeScript-calculator/">
                  See Project{" "}
                </a>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="project-card">
              <div className="project-img">
                <img src="images/project6.png" />
              </div>
              <div className="techs">
                <span>HTML,</span>
                <span>CSS,</span>
                <span>JavaScript,</span>
                <span>Express</span>
              </div>
              <h3 className="project-name">Showcase website</h3>
              <p className="project-desc">
                The website stands as a testament to my continuous learning and
                passion for web development, inviting others to explore the
                possibilities of code. This website was initially a pure
                frontend project, but I added a backend to it as my coding
                skills grew. You can now email me directly from my portfolio via
                an npm package.
              </p>
              <button type="button" className="project-btn">
                <a href="https://josuejure.github.io/my-portfolio/">
                  See Project{" "}
                </a>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <button type="button" className="btn">
              <a href="https://github.com/josueJURE">View more</a>
            </button>
          </div>
          <div className="section-border"></div>
        </section>
        // End of Projects // Contact
        <section className="contact" id="contact">
          <h1 className="section-bg-heading">Contact Me</h1>
          <h1 className="section-heading">Contact</h1>
          <h3 className="sub-heading">
            Let's <span>Have Some Talk</span>
          </h3>
          <div className="section-border"></div>
          <div className="contact-content">
            <div className="contact-left">
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <div className="contact-info">
                  <span>Address</span>
                  <span>London, UK</span>
                </div>
              </div>
              <div className="freelance">
                <i className="fa-regular fa-user"></i>
                <div className="contact-info">
                  <span>Developer</span>
                  <span>Available Right Now</span>
                </div>
              </div>
              <div className="email">
                <i className="fa-regular fa-envelope"></i>
                <div className="contact-info">
                  <span>Email</span>
                  <span>josue.jure@gmail.com</span>
                </div>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <div className="contact-info">
                  <span>Phone</span>
                  <span>+7887399922</span>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form action="/" method="POST">
                <div className="input-groups">
                  <div className="input-group">
                    <label htmlFor="name">
                      Your full name <i className="fa-solid fa-asterisk"></i>
                    </label>
                    <input type="text" name="name" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">
                      Your email address{" "}
                      <i className="fa-solid fa-asterisk"></i>
                    </label>
                    <input type="email" name="email" required />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="subject">
                    Your subject <i className="fa-solid fa-asterisk"></i>
                  </label>
                  <input type="text" name="subject" required />
                </div>
                <div className="input-group">
                  <label htmlFor="message">
                    Your message <i className="fa-solid fa-asterisk"></i>
                  </label>
                  <textarea name="message" required></textarea>
                </div>
                <button type="submit" className="contact-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        // End of Contact // Footer
        <footer className="footer">
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="copyright">
            <p className="year"></p>
          </div>
          <div className="author">
            <p>
              Made with <span>Love & Passion</span>
            </p>
          </div>
        </footer>
        // End of Footer
      </div>
    </div>
  );
}

export default App;
