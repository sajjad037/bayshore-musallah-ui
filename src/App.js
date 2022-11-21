import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Events from './pages/events/Events';
import SignUp from './pages/signUp/SignUp';
import Donation from './pages/donation/Donation';


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
