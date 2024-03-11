import './our-services.css';
import React from 'react';
import service1 from '../media/image/categories/birthdays.jpg';
import service2 from '../media/image/categories/ads.jpg';
import service3 from '../media/image/categories/pre-wedding.jpg';
import service4 from '../media/image/categories/proposal.jpg';
import service5 from '../media/image/categories/wedding.jpg';


function Services () {
  
  

    return ( 
      <div> 

      <h2>Our Services </h2>

        <div id= "services" className="services">
                       

            <div id= "pre-wedding" className="service">
            
            <img src={service3} alt='Valor Motion Pictures' className='camera'/>
            <h3>Pre Weddings</h3>
                      
            </div>

            <div id= "birthday" className="service">
            
            <img src={service1} alt='Valor Motion Pictures' className='camera'/>
            <h3>Birthdays</h3>
            
            </div>

            <div id= "proposal" className="service">
            
            <img src={service4} alt='Valor Motion Pictures' className='camera'/>
            <h3>Proposals</h3>
                      
            </div>

            <div id= "documentary" className="service">
            
            <img src={service2} alt='Valor Motion Pictures' className='camera'/>
            <h3>Ads</h3>
            
            </div>

            <div id= "wedding" className="service">
            
            <img src={service5} alt='Valor Motion Pictures' className='camera'/>
            <h3>Wedding Videos</h3>
                      
            </div>
            
        </div>
  
      </div>
    );
  }
  
  export default Services;