import React from 'react';

import './contact-us.css';
import ContactForm from './contactform';
import ContactWhatsApp from './contactformmobile';

const ContactUS = () => {
    
  return (
    
    <div className='contact' id='contact'>
          
       
            <div className="App-contact-form" id='desktop'>
            
               <ContactForm /> 
                
            </div>
            <div className="App-contact-form" id='mobile'>
            
              
               <ContactWhatsApp /> 
                
            </div>
            
            
        
    </div>
  )
        
};

export default ContactUS;