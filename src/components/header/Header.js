import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  achievementSection,
  educationInfo,
  contactInfo,
} from "../../portfolio";
import LanguageSelect from "../languageSelect/languageSelect";

function Header() {
  const { isDark } = useContext(StyleContext);
  const { language } = useContext(LanguageContext);
  const viewEducation = educationInfo[language].display;
  const viewExperience = workExperiences[language].display;
  const viewOpenSource = openSource[language].display;
  const viewSkills = skillsSection[language].display;
  const viewAchievement = achievementSection[language].display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span
            className={isDark ? "dark-mode logo-name" : "light-mode logo-name"}
          >
            {greeting[language].username}
          </span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{skillsSection[language].section}</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">{educationInfo[language].section}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{workExperiences[language].section}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{openSource[language].section}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{achievementSection[language].section}</a>
            </li>
          )}
          <li>
            <a href="#contact">{contactInfo[language].section}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LanguageSelect />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
