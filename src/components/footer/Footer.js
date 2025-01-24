import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import { footer } from "../../portfolio";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      {footer[language].display && (
        <div className="footer-div">
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            {footer[language].credit}
          </p>
        </div>
      )}
    </Fade>
  );
}
