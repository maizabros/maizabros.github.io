import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import education from "../../assets/lottie/education";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { illustration } from "../../portfolio";
import emoji from "react-easy-emoji";
import Fade from "react-reveal/Fade";

export default function Education() {
  const { isDark } = useContext(StyleContext);

  if (educationInfo.display) {
    return (
      <div
        className={
          isDark ? "dark-mode education-main" : "light-mode education-main"
        }
      >
        <div className="education-text-div">
          <div className="education-section" id="education">
            <h1 className="education-heading">{emoji("Education 📚🎓")}</h1>
            <div className="education-card-container">
              {educationInfo.schools.map((school, index) => (
                <EducationCard key={index} school={school} />
              ))}
            </div>
          </div>
        </div>
        <Fade right duration={1000} distance="80px">
          <div className="education-image-div">
            {illustration.animated ? (
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
