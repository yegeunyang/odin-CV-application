// import { useState } from 'react'
import PersonalDetails from './components/PersonalDetails';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';

import './App.css'

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)"}}>
      <div className="editor" style={{ backgroundColor: "white", width: "50vw" }}>
        <h1>CV Maker</h1>
        <PersonalDetails />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
      </div>
      <div className="viewer" style={{ backgroundColor: "grey", width: "0vw", height: "0vh" }}>
      </div>
    </div>
  )
}

export default App
