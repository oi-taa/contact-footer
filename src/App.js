import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Theme from "./theme";


function Team() {
  return <div>Team Page Content</div>;
}

function Achievements() {
  return <div>Achievements Page Content</div>;
}

function ContactUs() {
  return <div>Contact Us Page Content</div>;
}

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Theme />} />
        <Route path="/team" element={<Team />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

