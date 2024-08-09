import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav bar/nav";
import Theme from "./theme/theme";
import {Footer} from "./footer/footer";
import { Contact } from "./contact/contact";
import { OurSponsors} from"./sponsors/sponsors";


function Team() {
  return <div>Team Page Content</div>;
}

function Achievements() {
  return <div>Achievements Page Content</div>;
}


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Theme />} />
        <Route path="/team" element={<Team />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <OurSponsors/>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

