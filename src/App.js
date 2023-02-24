import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p>
          <a
            href="https://github.com/y-shoraka/react-weather"
            target={"_blank"}
          >
            Open-Source Code
          </a>{" "}
          , by Yasaman Shoraka from{" "}
          <a href="https://www.shecodes.io/" target={"_blank"}>
            SheCodes
          </a>
        </p>
      </header>
    </div>
  );
}
