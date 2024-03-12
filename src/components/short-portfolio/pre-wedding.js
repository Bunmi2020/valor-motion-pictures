import './short-portfolio.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


function PreWedding () {
  
  

    return ( 
      <div  className='portfolio-component'> 

                      
      <div id= "services" className="services">
                        
          <iframe title='snippet'  src="https://drive.google.com/file/d/1UQNkawQm4BUtMEWsZVfcjF0FIE_poPg4/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
              
          <iframe title='snippet'  src="https://drive.google.com/file/d/1UTR9Zca7wSjoE6iceL4mgHlHK9W3HmTS/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
            
          <iframe title='snippet'  src="https://drive.google.com/file/d/1UZN7U6WhJs1k_xHHhSESxKBly94yYFG6/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
            
          <iframe title='snippet'  src="https://drive.google.com/file/d/1UgGBzq7wFDLwGGiZbOOgA2HO6ajCcD_o/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
            
          <iframe title='snippet' src="https://drive.google.com/file/d/1UiZ1OVvVbkRY8TDbDA_eMEdMz-EKnVEz/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
            
                                  
      </div> 
      <HashLink to="/video#pre-weddings" className="navbar__link">View More</HashLink>

    </div>  
    );
  }
  
  export default PreWedding;