import { en } from "./strings/en";
import { jp } from "./strings/jp";
import { es } from "./strings/es";

const portfolioData = {
  en: en,
  jp: jp,
  es: es,
};

function getLanguages() {
  return Object.keys(portfolioData);
}

// Get the data from all languages
const illustration = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].illustration;
  return p;
}, {});

const greeting = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].greeting;
  return p;
}, {});

const socialMediaLinks = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].socialMediaLinks;
  return p;
}, {});

const splashScreen = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].splashScreen;
  return p;
}, {});

const skillsSection = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].skillsSection;
  return p;
}, {});

const educationInfo = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].educationInfo;
  return p;
}, {});

const workExperiences = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].workExperiences;
  return p;
}, {});

const openSource = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].openSource;
  return p;
}, {});

const bigProjects = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].bigProjects;
  return p;
}, {});

const achievementSection = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].achievementSection;
  return p;
}, {});

const talkSection = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].talkSection;
  return p;
}, {});

const contactInfo = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].contactInfo;
  return p;
}, {});

const isHireable = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].isHireable;
  return p;
}, {});

const resumeSection = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].resumeSection;
  return p;
}, {});

const footer = Object.keys(portfolioData).reduce((p, l) => {
  p[l] = portfolioData[l].footer;
  return p;
}, {});

export {
  getLanguages,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  contactInfo,
  isHireable,
  resumeSection,
  footer,
};
