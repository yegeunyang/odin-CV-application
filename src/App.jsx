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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function printPDF() {
  html2canvas(document.querySelector("#pdf")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("CV.pdf");
  });
}

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

  const [experiences, setExperiences] = useState({
    list: [
      {
        id: crypto.randomUUID(),
        title: "Web Developer Intern",
        company: "BlowUp Inc.",
        dateFrom: "2024/5",
        dateTo: "2024/8",
        city: "Madison, WI",
        about: "Wow",
      },
      {
        id: crypto.randomUUID(),
        title: "Software Engineer Intern",
        company: "SugarHill Inc.",
        dateFrom: "2024/12",
        dateTo: "2025/1",
        city: "Chicago, IL",
        about: "Wow",
      },
    ],
    draft: null,
  });

  const [skills, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      category: "Programming Languages",
      item: "C, Rust, Java, JavaScript, Python",
    },
    { id: crypto.randomUUID(), category: "Database", item: "PostgreSQL" },
  ]);

  const [educations, setEducations] = useState({
    list: [
      {
        id: crypto.randomUUID(),
        school: "UW-Madison",
        degree: "Mathematics, BA",
        dateFrom: "2024/5",
        dateTo: "2024/8",
        city: "Madison, WI",
        about: "Wow",
      },
      {
        id: crypto.randomUUID(),
        school: "UW-Madison",
        degree: "Computer Science, BA",
        dateFrom: "2024/5",
        dateTo: "2024/8",
        city: "Madison, WI",
        about: "Wow",
      },
    ],
    draft: null,
  });

  const [achievements, setAchievements] = useState([
    {
      id: crypto.randomUUID(),
      item: "waaa",
    },
    {
      id: crypto.randomUUID(),
      item: "heheheh",
    },
  ]);

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
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <Skills skills={skills} setSkills={setSkills} />
          <Education educations={educations} setEducations={setEducations} />
          <Achievements
            achievements={achievements}
            setAchievements={setAchievements}
          ></Achievements>
        </div>
      </div>
      <div id="viewer">
        <div id="menu">
          <button onClick={printPDF}>
            <img src="download-minimalistic-svgrepo-com.svg"></img>
          </button>
        </div>
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
