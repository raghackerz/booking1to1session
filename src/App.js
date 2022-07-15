import React from 'react';

//pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import BookingSession from './pages/BookingSession';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/book/:searchTerm" element={<BookingSession />} />
      </Routes>
    </Router>
  );
}

export default App;
