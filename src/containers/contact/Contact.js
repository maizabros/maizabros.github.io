import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import contact from "../../assets/lottie/contact";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">
              {contactInfo[language].title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo[language].subtitle}
            </p>
            <div
              className={
                isDark
                  ? "dark-mode contact-text-div"
                  : "light-mode contact-text-div"
              }
            >
              <i className="fas fa-phone"></i>{" "}
              {contactInfo[language].number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo[language].number}
                  >
                    {contactInfo[language].number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <i className="fas fa-paper-plane"></i>{" "}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo[language].email_address}
              >
                {contactInfo[language].email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration[language].animated ? (
              <DisplayLottie animationData={contact} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
