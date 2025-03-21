import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NAS from "./pages/NAS";
import MeetingRooms from "./pages/MeetingRooms";
import OurCommunity from "./pages/OurCommunity";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nas" element={<NAS />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
          <Route path="/our-community" element={<OurCommunity />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
