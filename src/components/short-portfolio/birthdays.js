import './short-portfolio.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';



function Birthdays () {
  
  

    return ( 
      <div className='portfolio-component'> 

        <div id= "services" className="services">
            <iframe title='snippet' src="https://drive.google.com/file/d/1TLsPG5o74F3XRqqNQTk5knQ0784pi3w_/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                                
            <iframe title='snippet'  src="https://drive.google.com/file/d/1TSHizi9NiLF8kixEKHbNydUMhAWBxCY4/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
              
            <iframe title='snippet'  src="https://drive.google.com/file/d/1Tsj5f27LfL3dDe_dSZT_x6-Qr55BaMjB/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
              
            <iframe title='snippet'  src="https://drive.google.com/file/d/1T_Ryy76XbEZC6YI_qDRK33xCoGWzYVin/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
              
            <iframe title='snippet' src="https://drive.google.com/file/d/1TtRmORbOcjMh9Cadk3pP4UUV4ZnaCRwG/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                    
                       
        </div>

        <HashLink to="/video#birthdays" className="navbar__link">View More</HashLink>

      </div>   
                );
  }
  
  export default Birthdays;