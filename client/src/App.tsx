import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import About from "./components/About";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
  useEffect(() => {
    async function wakeServer() {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/wake`);
    }
    wakeServer();
  });

  return (
    <>
      <Header />
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
