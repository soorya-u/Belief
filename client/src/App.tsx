import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "@/components/NavBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Stats from "@/pages/Stats";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

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
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
