import React from "react";
import { Router } from "./Routes/Router";
import {GlobalStyle} from "./Global/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
