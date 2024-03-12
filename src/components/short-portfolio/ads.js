import './short-portfolio.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


function Ads () {
  
  

    return ( 
      <div className='portfolio-component'> 

      <div id= "services" className="services">
                      
            <iframe title='snippet' src="https://drive.google.com/file/d/1TDCkOpcCzQqAqYTlbo07Q6xE5E6X7rd_/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                                
            <iframe title='snippet'  src="https://drive.google.com/file/d/1TE0n6_3Q027-GWN8mt8Mj8M8dzZ53CqG/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
             
            <iframe title='snippet'  src="https://drive.google.com/file/d/1TFcg3UDiVuZvI_GyJQQaIj1g-T_1RPqr/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
             
            <iframe title='snippet'  src="https://drive.google.com/file/d/1TFx8t_u52ZeuB_n2xjRWr4A4WyVf2384/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
             
            <iframe title='snippet' src="https://drive.google.com/file/d/1TIFdiXijn9FyqUGUXIlapkFgEqhG0rgw/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
             
      </div>   

      <HashLink to="/video#ads" className="navbar__link">View More</HashLink>
    </div>  
    );
  }
  
  export default Ads;