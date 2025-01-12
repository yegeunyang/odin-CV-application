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
import jsPDF from 'jspdf';

function printPDF() {
  html2canvas(document.querySelector("#pdf")).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('CV.pdf');
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
          <button onClick={printPDF}>Download</button>
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
