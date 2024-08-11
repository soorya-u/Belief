import { Routes, Route } from "react-router-dom";

import { useServer } from "./hooks/use-server";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Stats from "@/pages/Stats";

import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";

function App() {
  useServer();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
