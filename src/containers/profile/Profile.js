import React, { useState, useEffect, lazy, Suspense, useContext } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import LanguageContext from "../../contexts/LanguageContext";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  const { language } = useContext(LanguageContext);

  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource[language].showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then((result) => {
            if (result.ok) {
              return result.json();
            }
          })
          .then((response) => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource[language].showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource[language].display &&
    openSource[language].showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
