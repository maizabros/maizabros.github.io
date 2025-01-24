import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";

export default function SoftwareSkill() {
  const { language } = React.useContext(LanguageContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection[language].softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.imageSrc ? (
                  <img src={skills.imageSrc} alt={skills.skillName}></img>
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
