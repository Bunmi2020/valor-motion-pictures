import './short-portfolio.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


function Proposals () {
  
  

    return ( 
      <div  className='portfolio-component'> 

        <div id= "services" className="services">
        
            <iframe title='snippet'  src="https://drive.google.com/file/d/1UilExfteoPwiZt1vyDnK3y-NG4rcRWH_/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
              
              <iframe title='snippet'  src="https://drive.google.com/file/d/1UplhaR6_gzyDHQOOQGKZkW72vl_IHioj/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                
              <iframe title='snippet'  src="https://drive.google.com/file/d/1Us49Uwe4yMF6vcUsmFCexleFvib_JRBZ/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                
              <iframe title='snippet'  src="https://drive.google.com/file/d/1UtZ9opUgBpyqtcn0HoFTaLhgHBNyVjLe/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                
              <iframe title='snippet' src="https://drive.google.com/file/d/1SnPOXhPatg7wQ-FzfMChYq_A6O3oaCrr/preview" muted alt='Valor Pictures' className='camera'>Your browser does not support the video tag.</iframe>
                
                   
             
        </div>  

        <HashLink to="/video#proposals" className="navbar__link">View More</HashLink>   
      </div>  
    );
  }
  
  export default Proposals;