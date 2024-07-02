import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Technologies from './Pages/Technologies';
import Contact from './Pages/Contact';


function App()  {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/technologies" element={<Technologies />} />
    </Routes>
    <Footer />
  </Router>
  )
    

}

export default App;
