import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Photos from './photos';
import Video from './video';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div className="App" id=' '> 
      <Header />
      <Routes >

          <Route path="/" element={<Home />} />
          
          
          <Route path="/about" element={<About />} />
           
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/photos" element={<Photos />} />
           
          <Route path="/video" element={<Video />} />
          
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
