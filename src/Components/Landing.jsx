import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adduser from "./Adduser";
import Edituser from "./Edituser";
import Home from "./Home";
import NavBar from "./NavBar";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/edit/:id" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
