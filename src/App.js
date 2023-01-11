import "./App.css";
import React from "react";
import { HomePage, DownloadPage } from "./pages";
import { Toaster } from "react-hot-toast";
import { Header, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download/:uuid" element={<DownloadPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
