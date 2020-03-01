import React from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import UnitsContainer from "./components/UnitsContainer";

import Divider from "@material-ui/core/Divider";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Divider />
      <UnitsContainer />
    </div>
  );
}

export default App;
