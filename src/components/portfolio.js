import React, { useState } from 'react';

import './portfolio.css';
import Birthdays from './short-portfolio/birthdays';
import Ads from './short-portfolio/ads';
import PreWedding from './short-portfolio/pre-wedding';
import Proposals from './short-portfolio/proposals';
import Weddings from './short-portfolio/wedding';



    
    function PortfolioComponent () { 

        const [index, setIndex] = useState(0);
        const components = [<Birthdays/>, <Ads/>, <PreWedding/>, <Proposals/>, <Weddings />];
        
        return (
         <div className='Portfolio'>

            <h2>Recent Projects</h2>
         
            <ul className='categories'>
            
                <li><button onClick={() => setIndex(4)}>Weddings</button></li>
                <li><button onClick={() => setIndex(3)}>Proposals</button></li>
                <li><button onClick={() => setIndex(2)}>Pre Wedding </button></li>
                
                <li><button onClick={() => setIndex(0)}>Birthdays</button></li>
                <li><button onClick={() => setIndex(1)}>Ads</button></li>
                
                

            </ul>

            <div>
                {components[index]}
            </div>

        </div>

        );



    };
        
    
;

export default PortfolioComponent;