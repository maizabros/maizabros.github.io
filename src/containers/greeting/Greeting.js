import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import meeting from "../../assets/lottie/meeting";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import HelloText from "../../components/helloText/HelloText";
import {
  illustration,
  greeting,
  contactInfo,
  resumeSection,
} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);
  if (!greeting[language].display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                <span className="wave-emoji">{emoji("👋")}</span>{" "}
                <HelloText final="!" />
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting[language].subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={contactInfo[language].buttonText}
                  href="#contact"
                />
                {greeting[language].resumeLink && (
                  <Button
                    href={greeting[language].resumeLink}
                    text={resumeSection[language].buttonText}
                    className="download-link-button"
                    download={true}
                  />
                )}
                {greeting[language].shokumukeiLink && (
                  <Button
                    href={greeting[language].shokumukeiLink}
                    text={resumeSection[language].shokumukeiText}
                    className="download-link-button"
                    download={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration[language].animated ? (
              <DisplayLottie animationData={meeting} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
