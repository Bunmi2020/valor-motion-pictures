import './short-portfolio.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


function Weddings () {
  
  
    return ( 
      <div className='portfolio-component'> 

        <div id= "services" className="services">
                        
          <iframe title='snippet'  src="https://drive.google.com/file/d/1SsJbazr7_-BggCMGmE0GijiPSMHopAc2/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
              
          <iframe title='snippet'  src="https://drive.google.com/file/d/1T222N8HqyhpirMfXnkx34yuDH_3LGKpe/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                
          <iframe title='snippet'  src="https://drive.google.com/file/d/1T5UQ9iXQPHBqBgbBf4_oARWSOmSfXJGM/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
            
          <iframe title='snippet'  src="https://drive.google.com/file/d/1T6CyJXLXXS-FM2ZW6QWh2RnOQh9MJ8wl/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
            
          <iframe title='snippet' src="https://drive.google.com/file/d/1TCb4GlpZ3OIxuzyX6J9AX0OdiTnsLig-/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                
                
        </div>  

        <HashLink to="/video#weddings" className="navbar__link">View More</HashLink>
      </div>  
    );
  }
  
  export default Weddings;