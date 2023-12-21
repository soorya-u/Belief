import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
