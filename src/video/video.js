import React, { useEffect, useState } from 'react';

import './video.css';

import Ads from './ads';
import Weddings from './wedding';
import Birthdays from './birthday';
import ProWedding from './prewedding';
import Proposal from './proposal';
import Funerals from './funeral';

function Video () {
  
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
    
    <div id= "app" className="video-app">
  
      <div id= " " className="Top-section">
       <video alt='Valor Pictures' className='videoback' autoPlay loop muted> 
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
      </video>
      </div>

      <div className="up-cursor" id='myBtn'><button style={{ maxWidth: '150px', display: isVisible ? 'none' : 'flex', position: 'fixed',flexDirection: 'column',justifyContent: 'center', zIndex: 9, boxShadow: '3px, 2px, gray',
        bottom: '0%',
        background: 'linear-gradient(90deg, purple, red)',
       borderRadius: '10px',
        right: '0%',
       margin: '30px',
        padding: '5px 12px'}}><a href="https://wa.me/+2348135330335" target="_blank" rel="noreferrer" style={{color: 'white', padding: '10px', fontSize: '20px'}}>Let's talk</a></button>

      </div>

      <div className='VdBody'>

      
        <div className='paragraph'>
          <h2>Valor Motion Pictures' previous works</h2>
          <p>The following are best of our past works as hand selected by the Valor himself, you can check for more on our <a href='https://www.instagram.com/valor_pictures?' target="_blank" rel="noreferrer">Instagram page</a> </p>
        </div>

        <div >
            <Ads />
            <Weddings />
            <Birthdays />
            <ProWedding />
            <Proposal />
            <Funerals />
              

        </div>

      </div>

    </div>
  );
}

export default Video;
