import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
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
          
      </Routes>

      
      <Footer />
      
    </div>
  );
}

export default App;
