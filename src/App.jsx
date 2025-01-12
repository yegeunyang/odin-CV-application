// import { useState } from 'react'
import PersonalDetails, {
  ViewContact,
  ViewIntro,
  ViewPicture,
} from "./components/PersonalDetails";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

import "./App.css";
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@icloud.com",
    phone: "(777) 777-7777",
    address: "Madison, Wsiconsin",
    occupation: "Cheese Logger",
    linkedin: "https://linkedin.com/",
    github: "https://github.com",
    about: "The best cheese logger in Wisconsin.",
  });

  const [picture, setPicture] = useState("profile.png");

  return (
    <div id="screen">
      <div id="editor">
        <h1>Resumé/CV Maker</h1>
        <div>
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            setPicture={setPicture}
          />
          <Experience />
          <Education />
          <Skills />
          <Achievements />
        </div>
      </div>
      <div id="viewer">
        <div id="menu"></div>
        <div id="viewer-body">
          <div id="pdf">
            <div id="side">
              <ViewPicture picture={picture}></ViewPicture>
              <ViewContact personalDetails={personalDetails}></ViewContact>
            </div>
            <div id="main">
              <ViewIntro personalDetails={personalDetails}></ViewIntro>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
