// import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
      <div className="editor" style={{ backgroundColor: "white", width: "50vw" }}>
      </div>
      <div className="viewer" style={{ backgroundColor: "grey", width: "50vw", height: "100vh" }}>

      </div>
    </div>
  )
}

export default App
