import React, { useEffect, useState } from 'react';

import './photos.css';

import service1 from './media/image/main/AAP_5050.jpg';
import service2 from './media/image/main/AAP_5330.jpg';
import service3 from './media/image/main/DSC_1820.jpg';
import service4 from './media/image/main/DSC_1865.jpg';
import service5 from './media/image/main/IMG_3725.jpg';
import service6 from './media/image/main/IMG_3749.jpg';
import service7 from './media/image/main/IMG_3807a.jpg';
import service8 from './media/image/main/IMG_3828.jpg';
import service9 from './media/image/main/IMG_3883.jpg';
import service01 from './media/image/main/IMG_4165.jpg';
import service02 from './media/image/main/VAL_7331.jpg';
import service03 from './media/image/main/VAL_7358.jpg';


function Photos () {
  
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
    <div id= "app" className="Photo-app">
      <div className="up-cursor" id='myBtn'><button style={{ maxWidth: '150px', display: isVisible ? 'none' : 'flex', position: 'fixed',flexDirection: 'column',justifyContent: 'center', zIndex: 9, boxShadow: '3px, 2px, gray',
        bottom: '0%',
        background: 'linear-gradient(90deg, purple, red)',
       borderRadius: '10px',
        right: '0%',
       margin: '30px',
        padding: '5px 12px'}}><a href="https://wa.me/+2348135330335" target="_blank" rel="noreferrer" style={{color: 'white', padding: '10px', fontSize: '20px'}}>Let's talk</a></button>

      </div>
      
      <div className='photo-paragraph'>
          <h2>Valor Motion Pictures' previous works</h2>
          <p>The following are best of our past works as hand selected by the Valor himself, you can check for more on our <a href='https://www.instagram.com/valor_photostudios/' target="_blank" rel="noreferrer">Instagram page</a> </p>
       </div>
      <div className='photos'>
       
        <img src={service1} alt='Valor Pictures' className='camera'/>
        <img src={service2} alt='Valor Pictures' className='camera'/>
        <img src={service3} alt='Valor Pictures' className='camera'/>
        <img src={service4} alt='Valor Pictures' className='camera'/>
        <img src={service5} alt='Valor Pictures' className='camera'/>
        <img src={service6} alt='Valor Pictures' className='camera'/>
      </div>
      <div className='photos'>
        
        <img src={service7} alt='Valor Pictures' className='camera'/>
        <img src={service8} alt='Valor Pictures' className='camera'/>
        <img src={service9} alt='Valor Pictures' className='camera'/>
        <img src={service01} alt='Valor Pictures' className='camera'/>
      </div>
      <div className='photos'>
       
        <img src={service02} alt='Valor Pictures' className='camera'/>
        <img src={service03} alt='Valor Pictures' className='camera'/>
        
      </div>

    </div>
  );
}

export default Photos;
