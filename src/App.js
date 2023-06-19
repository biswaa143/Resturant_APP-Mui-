import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home";
import About from "./components/Page/About";
import Contact from "./components/Page/Contact";
import Menu from "./components/Page/Menu";
import Error from "./components/Page/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
