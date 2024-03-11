import './short-portfolio.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';



function Birthdays () {
  
  

    return ( 
      <div className='portfolio-component'> 

        <div id= "services" className="services">
                        
            <video alt='Valor Pictures' className='camera' controls muted> 
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                                
            <video alt='Valor Pictures' className='camera' controls muted> 
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            
            <video alt='Valor Pictures' className='camera' controls muted> 
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                      
            <video alt='Valor Pictures' className='camera' controls muted> 
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video alt='Valor Pictures' className='camera' controls muted> 
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                           
                       
        </div>

        <HashLink to="/video#birthdays" className="navbar__link">View More</HashLink>

      </div>   
                );
  }
  
  export default Birthdays;