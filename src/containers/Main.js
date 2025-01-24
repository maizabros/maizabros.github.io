import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(
    true
  );

  // get default language from browser
  const langPref = "jp";
  const [language, setLanguage] = useLocalStorage("jp", langPref);

  useEffect(() => {
    if (splashScreen[language].enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen[language].duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <LanguageProvider
        value={{ language: language, changeLanguage: changeLanguage }}
      >
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          {isShowingSplashAnimation && splashScreen[language].enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <Skills />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Talks />
              <Profile />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </StyleProvider>
      </LanguageProvider>
    </div>
  );
};

export default Main;
