import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Service from "./Pages/Service";
import PageNotFound from "./Pages/PageNotFound";
// import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<ContactUs />} exact />
          <Route path="/services" element={<Service />} exact />
          <Route path="/about" element={<AboutUs />} exact />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
