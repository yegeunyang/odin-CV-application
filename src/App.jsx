import PersonalDetails, {
  ViewContact,
  ViewIntro,
  ViewPicture,
} from "./components/PersonalDetails";
import Experience, { ViewExperience } from "./components/Experience";
import Education, { ViewEducation } from "./components/Education";
import Skills, { ViewSkills } from "./components/Skills";
import Achievements, { ViewAchievements } from "./components/Achievements";

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
    phone: "(555) 555-5555",
    address: "Madison, Wsiconsin",
    occupation: "Software Engineer",
    linkedin: "https://linkedin.com/janedoe",
    github: "https://github.com/janedoe",
    about:
      "Highly motivated Software Engineer with 4+ years of experience in designing, developing, and deploying scalable and user-friendly web and mobile applications. Proficient in a wide range of programming languages and frameworks, with a strong focus on delivering clean, efficient code and innovative solutions. Passionate about problem-solving, learning new technologies, and building impactful software.",
  });

  const [picture, setPicture] = useState("profile.png");

  const [experiences, setExperiences] = useState({
    list: [
      {
        id: crypto.randomUUID(),
        title: "Software Engineer",
        company: "ABC Mega Tech Solutions.",
        dateFrom: "2020/06",
        dateTo: "2024/08",
        city: "San Francisco, CA",
        about:
          "Developed and maintained scalable web applications using React.js and Node.js",
      },
      {
        id: crypto.randomUUID(),
        title: "Full Stack Developer",
        company: "XYZ Amazing Software.",
        dateFrom: "2024/08",
        dateTo: "Present",
        city: "Chicago, IL",
        about:
          "Built responsive and dynamic web applications using React.js, Express.js, and MongoDB",
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
    {
      id: crypto.randomUUID(),
      category: "Frameworks & Libraries",
      item: "React.js, Node.js, Django",
    },
    {
      id: crypto.randomUUID(),
      category: "Databases",
      item: "PostgreSQL, MongoDB",
    },
  ]);

  const [educations, setEducations] = useState({
    list: [
      {
        id: crypto.randomUUID(),
        school: "UW-Madison",
        degree: "Mathematics, BA",
        dateFrom: "2018/09",
        dateTo: "2020/05",
        city: "Madison, WI",
        about: "3.8/4.0 GPA, took Topology and Differential Geometry",
      },
      {
        id: crypto.randomUUID(),
        school: "UW-Madison",
        degree: "Computer Science, BA",
        dateFrom: "2018/09",
        dateTo: "2020/05",
        city: "Madison, WI",
        about: "3.8/4.0 GPA, took Algorithms and Operating Systems",
      },
    ],
    draft: null,
  });

  const [achievements, setAchievements] = useState([
    {
      id: crypto.randomUUID(),
      item: "AWS Uncertified Architect",
    },
    {
      id: crypto.randomUUID(),
      item: "Professional Googler",
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
              <ViewAchievements achievements={achievements}></ViewAchievements>
            </div>
            <div id="main">
              <ViewIntro personalDetails={personalDetails}></ViewIntro>
              <ViewExperience experiences={experiences}></ViewExperience>
              <ViewSkills skills={skills}></ViewSkills>
              <ViewEducation educations={educations}></ViewEducation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
