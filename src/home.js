import React, { useEffect, useState } from 'react';
import './App.css';

import Banner from './components/banner';
import Services from './components/our-services';
import About from './components/about-us';
import PortfolioComponent from './components/portfolio';


function Home () {
  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.pageYOffset < 200; // change this number as needed
      setIsVisible(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return ( 
    <div id= "app" className="App">

<div className="up-cursor" id='myBtn'><button style={{ maxWidth: '150px', display: isVisible ? 'none' : 'flex', position: 'fixed',flexDirection: 'column',justifyContent: 'center', zIndex: 9, boxShadow: '3px, 2px, gray',
        bottom: '0%',
        background: 'linear-gradient(90deg, purple, red)',
       borderRadius: '10px',
        right: '0%',
       margin: '20px',
        padding: '5px 12px'}}><a href="https://wa.me/+2348135330335" target="_blank" rel="noreferrer" style={{color: 'white', padding: '10px', fontSize: '20px'}}>Let's talk</a></button>

      </div>
      
      <div className="Top-section">
        <Banner />
      </div>

      <Services />
      <About />
      <PortfolioComponent />
     
    </div>
  );
}

export default Home;
