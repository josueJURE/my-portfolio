import skillsData from "../utilities/skillsArray";
import React from "react";
import { JSX } from "react";

function SkillsCard(): JSX.Element {
  return (
    <div className="skills-cards">
      {skillsData.map((item, index) => (
        <div className="skills-card" key={index}>
          <div className="skill">
            <span>{item.skill}</span>
            <span>{item.percentage}</span>
          </div>
          <p>{item.description}</p>
          {/* <div className="skills-card-progress"></div> */}
        </div>
      ))}
    </div>
  );
}

export default SkillsCard;
