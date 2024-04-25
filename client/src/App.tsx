import { Routes, Route } from "react-router-dom";

import { AxiosService } from "./libs/axios";
import { useQuery } from "@tanstack/react-query";

import { useNetworkAlert } from "./hooks/use-alert";

import NavBar from "@/components/custom/NavBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Stats from "@/pages/Stats";
import Footer from "@/components/custom/Footer";
import { Toaster } from "@/components/primitives/toaster";

function App() {
  const { isError } = useQuery({
    queryKey: ["health"],
    queryFn: async () => await AxiosService.wakeServer(),
    refetchInterval: 1000 * 60 * 10, // 10 Minutes
  });

  useNetworkAlert(isError);

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
