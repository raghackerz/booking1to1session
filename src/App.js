import React, { useEffect } from "react";

//pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import BookingSession from "./pages/BookingSession";
import CalendlyPopup from "./components/CalendlyPopup";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/book/:searchTerm" element={<BookingSession />} />
        <Route path="/book" element={<BookingSession />} />
        <Route path="/test" element={<CalendlyPopup />} />
      </Routes>
    </Router>
  );
};

export default App;
