import { useState, useEffect } from "react";

import clothingData from "./data/clothing";
import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Shoes from "./components/Shoes";

function App() {

  return (
    <div className="App">
      <Top />
      <Bottom />
      <Shoes />

      {/* <header className="App-header">

      </header> */}

      {/* {clothingData.map(({ description, type, dressCode, imageUrl }, i) => {
        return (
          <div className="item-card" key={i}>
            <div>{description}</div>
            <div>{type}</div>
            <div>{dressCode}</div>
            <img src={imageUrl} alt={`${dressCode} ${type}`} />
          </div>
        );
      })} */}
    </div>
  );
}

export default App;

// {/* <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a> */}
