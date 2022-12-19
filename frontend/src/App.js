import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service';
import './style.scss'
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
   
      <BrowserRouter>
      <div className='bg-black w-full overflow-hidden'>
      <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    
    </>
  );
}

export default App;