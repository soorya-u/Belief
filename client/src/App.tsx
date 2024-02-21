import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import About from "@/pages/About";
import Home from "@/pages/Home";
import Stats from "@/pages/Stats";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    async function wakeServer() {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/wake`);
    }
    wakeServer();
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
