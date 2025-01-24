import "./languageSelect.scss";
import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import ReactFlagsSelect from "react-flags-select";

const LanguageSelect = () => {
  const { language } = useContext(LanguageContext);
  const { isDark } = useContext(StyleContext);
  const languageContext = useContext(LanguageContext);

  // For now, we do it manually
  const customLabels = { US: "EN", JP: "JP", ES: "ES" };
  const labtoCode = { EN: "US", JP: "JP", ES: "ES" };
  const languages = Object.keys(customLabels).map((lang) => lang);

  console.log();

  return (
    <div className={isDark ? "language-div-dark" : "language-div"}>
      <ReactFlagsSelect
        countries={languages}
        customLabels={customLabels}
        showSelectedLabel={false}
        selected={labtoCode[language.toUpperCase()]}
        onSelect={(code) =>
          languageContext.changeLanguage(customLabels[code].toLowerCase())
        }
        className={isDark ? "menu-flags flags-dark" : "menu-flags"}
      />
    </div>
  );
};
export default LanguageSelect;
