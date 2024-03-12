import React, { useEffect, useState } from 'react';

import './video.css';

import Ads from './video/ads';
import Weddings from './video/wedding';
import Birthdays from './video/birthday';
import PreWedding from './video/prewedding';
import Proposal from './video/proposal';
import Funerals from './video/funeral';
import backg from  './media/video/Snippet_video.mp4';
import Others from './video/others';
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
       <video alt='Valor Motion Pictures' className='videoback' autoPlay muted loop playsinline > 
              <source src={backg} type="video/mp4" />
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
            <Weddings />
            <Proposal />
            
            <PreWedding />
            <Birthdays />
            <Ads />
            <Funerals />
            <Others />
        
        </div>

      </div>

    </div>
  );
}

export default Video;
