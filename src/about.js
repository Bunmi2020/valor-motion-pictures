import React, { useEffect, useState } from 'react';

import './about.css';

import tiktok from './media/image/facebook1.png';
import instagram from './media/image/instagram1.png';
import backg from  './media/video/Snippet_about.mp4';
function About () {
  
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
    <div id= "app" className="about-app">
      
      <div id= " " className="Top-section">

      
      <div className="up-cursor" id='myBtn'><button style={{ maxWidth: '150px', display: isVisible ? 'none' : 'flex', position: 'fixed',flexDirection: 'column',justifyContent: 'center', zIndex: 9, boxShadow: '3px, 2px, gray',
        bottom: '0%',
        background: 'linear-gradient(90deg, purple, red)',
       borderRadius: '10px',
        right: '0%',
       margin: '30px',
        padding: '5px 12px'}}><a href="https://wa.me/+2348135330335" target="_blank" rel="noreferrer" style={{color: 'white', padding: '10px', fontSize: '20px'}}>Let's talk</a></button>

      </div>
     
      <video alt='Valor Motion Pictures' className='about-videoback' autoPlay muted loop> 
              <source src={backg} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>

      <div id='about' className='body'>
        <h2>Valor Motion Pictures</h2>
        <p>At Valor's picture, our mission is to craft cinematic experiences that transcend time and space. With a keen eye for detail and a deep passion for storytelling, we specialize in capturing the essence of every moment, weaving together visuals and emotions that resonate with our clients and their audiences alike.

        </p>
        <br />
        <p>Based in both the UK and Nigeria, our diverse team brings together a wealth of experience and creativity, enriched by the cultural richness of both regions. Whether it's documenting the joy of a wedding, the excitement of a corporate event, or the beauty of a destination, we approach each project with dedication and innovation.
        </p>
        <br />
<p>Our commitment to excellence extends beyond the lens. We believe in building lasting relationships with our clients, understanding their vision, and exceeding their expectations. From concept to delivery, we strive to provide a seamless experience, ensuring that every frame tells a compelling story and leaves a lasting impression.

</p>
<br />
<p>Join us as we create lasting memories through captivating visuals and heartfelt connections. Let us turn your moments into cherished memories.</p>
      
    <div className="about-socials">
                    <a href="https://www.instagram.com/valormotion_pictures?" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                    <a href=" " target="_blank" rel="noreferrer"><img src={tiktok} alt="TikTok"/></a>
                     
      </div>
      
      </div>

    </div>
  );
}

export default About;
