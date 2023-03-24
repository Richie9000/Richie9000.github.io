import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeMarkup from "./components/pages/Home/HomeMarkup";
import ShoeMarkup from "./components/pages/Shoe/ShoeMarkup";
import HouseMarkup from "./components/pages/House/HouseMarkup";

import { BreakpointProvider } from "react-socks";
import { ScrollWindow } from "./components/pages/Scroll/ScrollWindow";

function App() {
  return (
    <BreakpointProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeMarkup />} />
            <Route path="/Scroll" element={<ScrollWindow />} />
            <Route path="/Model" element={<ShoeMarkup />} />
            <Route path="/house" element={<HouseMarkup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BreakpointProvider>
  );
}

export default App;
