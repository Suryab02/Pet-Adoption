import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes ,Route  } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
function App() {
  return(
  <div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  </BrowserRouter>
  </div>
  );}

export default App;
