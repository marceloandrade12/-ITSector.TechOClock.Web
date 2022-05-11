import React from "react";
import "./App.css";
import { Button } from "./components/button";
import { useNativeCommunication, usePlatform } from "./hooks";

function App() {
  const platform = usePlatform();
  const { openLocation, openContacts } = useNativeCommunication();

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
          src={
            "https://content.itsector.pt/hubfs/Webinars-Tech-OClock-2022-Banner-Image.svg"
          }
          alt="logo"
        />
        <p>Integração React em múltipla plataforma</p>
        <p style={{ fontSize: "20px" }}>
          Current Platform: <b>{platform}</b>
        </p>
        <Button onClick={openLocation} text={"Open Location"} />
        <Button
          onClick={openContacts}
          text={"Open Contacts"}
          style={{ marginTop: "10px" }}
        />
      </header>
    </div>
  );
}

export default App;
