import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Error from "./Error";
import Vehiclespage from "./vehiclespage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<AboutUs />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="vehicle" element={<Vehiclespage />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
