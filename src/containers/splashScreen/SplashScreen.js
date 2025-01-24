import React, { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);
  return (
    <div
      className={
        isDark ? "dark-mode splash-container" : "light-mode splash-container"
      }
    >
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen[language].animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting[language].username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
