import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo, illustration } from "../../portfolio";
import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import education from "../../assets/lottie/education";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Fade from "react-reveal/Fade";

export default function Education() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);

  if (educationInfo[language].display) {
    return (
      <div
        className={
          isDark ? "dark-mode education-main" : "light-mode education-main"
        }
      >
        <div className="education-text-div">
          <div className="education-section" id="education">
            <h1 className="education-heading">
              {educationInfo[language].title}
            </h1>
            <div className="education-card-container">
              {educationInfo[language].schools.map((school, index) => (
                <EducationCard key={index} school={school} />
              ))}
            </div>
          </div>
        </div>
        <Fade right duration={1000} distance="80px">
          <div className="education-image-div">
            {illustration[language].animated ? (
              <DisplayLottie animationData={education} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
