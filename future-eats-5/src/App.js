import React from "react";
import { Router } from "./Routes/Router";
import {GlobalStyle} from "./Global/GlobalStyle";
import {ToastContainer, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
      <ToastContainer
       limit={2}
       transition={Zoom}
       theme="colored"
       />
    </>
  );
}

export default App;
