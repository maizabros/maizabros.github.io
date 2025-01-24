import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import skills from "../../assets/lottie/skills";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);
  if (!skillsSection[language].display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "light-mode main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000} distance="40px">
          <div className="skills-image-div">
            {illustration[language].animated ? (
              <DisplayLottie animationData={skills} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000} distance="40px">
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection[language].title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection[language].subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection[language].skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
