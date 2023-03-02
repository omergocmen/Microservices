import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../partials/navbar";
import Contact from "../pages/home/contact";
import AboutUs from "../pages/home/aboutUs";
import Courses from "../pages/course/courses";
import CreateCourse from "../pages/course/create";
import CartDetail from "../pages/cart/cartDetail";
import CourseDetail from "../pages/course/courseDetail";

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
          <Route exact path="/courses/:id" element={<CourseDetail />} />
          <Route exact path="/courses/create" element={<CreateCourse />} />
          <Route exact path="/cartdetail" element={<CartDetail />} />
        </Routes>
      </div>
    </>
  );
}
