import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "@/components/custom/NavBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Stats from "@/pages/Stats";
import Footer from "@/components/custom/Footer";
import Wrapper from "@/components/custom/Wrapper";
import { AxiosService } from "./libs/axios";

function App() {
  useEffect(() => {
    async function wakeServer() {
      await AxiosService.wakeServer();
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
