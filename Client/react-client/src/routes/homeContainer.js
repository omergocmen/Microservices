import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../partials/navbar";
import Contact from "../pages/home/contact";
import AboutUs from "../pages/home/aboutUs";
import Courses from "../pages/course/courses";


export default function HomeContainer() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}
