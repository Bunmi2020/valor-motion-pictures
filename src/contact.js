import React from 'react';
import './contact.css';
import ContactForm from './contactform';
import Banner from './components/banner';
import backg from  './media/image/camera-7500550.jpg';


function Contact () {
  
  
  return ( 
    <div id= "app" className="contact-app">
        <Banner />
        
      <div id= " " className="Top-section">
        
        <img src={backg} alt='Valor Motion Pictures' className='about-videoback'/>
      
      </div>
      <div className='contact-body'>
        <h2>Contact Valor Motion Pictures</h2>
        <div className='contact' id='contact'>
        
               <ContactForm /> 
                   
        </div>
      </div>

    </div>
  );
}

export default Contact;
