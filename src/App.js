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
      <Routes forceRefresh>

          <Route path="/" element={<Home />} forceRefresh/>
          
          
          <Route path="/about" element={<About />} forceRefresh/>
           
          <Route path="/contact" element={<Contact />} forceRefresh/>
          
          <Route path="/photos" element={<Photos />} forceRefresh/>
           
          <Route path="/video" element={<Video />} forceRefresh/>
          
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
