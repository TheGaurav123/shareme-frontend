import "./App.css";
import React, { useState } from "react";
import { HomePage, DownloadPage } from "./pages";
import { Toaster } from "react-hot-toast";
import { Header, Footer, Spinner } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [spinnerState, setSpinnerState] = useState(false)


  // spinnerHandler
  const spinnerHandler = (comState) =>{
    comState ? setSpinnerState(true) : setSpinnerState(false)
  }

  return (
    <BrowserRouter>
      <Spinner state={spinnerState} />
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage state={spinnerHandler} />} />
        <Route path="/download/:uuid" element={<DownloadPage state={spinnerHandler} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
