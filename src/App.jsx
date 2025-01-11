// import { useState } from 'react'
import PersonalDetails from './components/PersonalDetails';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';

import './App.css'

function App() {
  return (
    <>
      <div id="editor">
        <h1>Resumé/CV Maker</h1>
        <div>
        <PersonalDetails />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        </div>
      </div>
      <div id="viewer">
      </div>
    </>
  )
}

export default App
