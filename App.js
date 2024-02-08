import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Gallery from './routes/Gallery';
import Career from './routes/Career';
import Contact from './routes/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
