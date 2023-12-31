import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/index";
import PageNotFound from "./Pages/error/index";
import Header from "./Components/Header";
import AboutUs from "./Pages/about/index"
import ContactUs from "./Pages/contact/index"
import Footer from "./Components/Footer/Footer";
import Service from "./Pages/service/index"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<ContactUs />} exact />
          <Route path="/services" element={<Service />} exact />
          <Route path="/about" element={<AboutUs />} exact />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
