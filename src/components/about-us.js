import React from 'react';
import about from '../media/image/image_about.png';
import tiktok from '../media/image/facebook1.png';
import instagram from '../media/image/instagram1.png';
import './about-us.css';

const About = () => {
    
  return (
    
    <div className='about' id='about'>
      <h2 className='about-heading'>About Valor Motion Pictures</h2>
     
          <div className="App-about">

              <div className="about-text">

                  <div className="about-valor">
                  <p>Capturing moments with precision and passion, we are a UK and Nigeria-based videography and cinematography brand. From weddings to corporate events, and creative story telling, we combine creativity and professionalism to preserve your memories.
                    </p>

                  </div>

                
                  <div className="about-socials">
                  <a href="https://www.instagram.com/valormotion_pictures?" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                  <a href=" " target="_blank" rel="noreferrer"><img src={tiktok} alt="TikTok"/></a>
                      
                   </div>
              </div>
              

              <div className="about-image">
                  <img src={about} alt='Valor Motion Pictures' className='camera'/>
                              
              </div>     
          </div>
              
          
    
            
    </div>
    
  )
        
};

export default About;