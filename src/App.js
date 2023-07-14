import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
 import ContactUs from "./Pages/contact";

import PageNotFound from "./Pages/error";
 import Header from "./Components/Header";
import AboutUs from "./Pages/about";

import Service from "./Pages/Service";

import Footer from "./Components/Footer/Footer";
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
