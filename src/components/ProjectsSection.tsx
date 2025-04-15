import projectData from "../utilities/ProjectSectionArray";
import React from "react"

function ProjectsSection() {
  return (
    <section className="projects" id="projects-section">
      <h1 className="section-bg-heading">My Projects</h1>
      <h1 className="section-heading">Portfolio</h1>
      <h3 className="sub-heading">
        My <span>Projects</span>
      </h3>
      <div className="projects-cards">
        {projectData.map((item, index) => (
          <div className="project-card" key={index}>
            {item.image_video === "video/recipe_app_video.mp4" ? (
              <video src={item.image_video} controls></video>
            ) : (
              <div className="project-img">


                <img src={item.image_video} />

              </div>
            )}

            <div className="techs">
              <span>{item.skills}</span>
            </div>

            <h3 className="project-name">{item.projectName}</h3>

            <p className="project-desc">{item.projectDescription}</p>
            <button type="button" className="project-btn">
              <a href={item.link}>
                See application{" "}
              </a>
              <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="section-border"></div>
    </section>
  );
}

export default ProjectsSection;
