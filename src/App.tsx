import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src={
          "https://content.itsector.pt/hs-fs/hubfs/Website%20Resources/ITSector_Logo.png"
        }
        className="company-logo"
        alt="company-logo"
        style={{
          position: "absolute",
          width: "200px",
          height: "56px",
          left: 0,
          padding: "24px",
        }}
      />
      <header className="App-header">
        <img
          src={"https://content.itsector.pt/hubfs/Tech-OClock-Logo-V1.png"}
          className="App-logo"
          alt="logo"
        />
        <p>ITSector Tech O'Clock Webinar</p>
        Integração React em múltipla plataforma
      </header>
    </div>
  );
}

export default App;
