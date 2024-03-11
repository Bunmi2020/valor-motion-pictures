import React, { useState } from 'react';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function ContactWhatsApp() {
 
  const [phone, setPhone] = useState('');
  const [phone1, setPhone1] = useState('');

  function Whatsapp(){
    const name = document.getElementById("name").value;
    const pickup = document.getElementById("pick").value;
    const dropoff = document.getElementById("drop").value;
    
    const url = "https://wa.me/+2349166859614?text="
    +"Hello! My "
    +"Name is *"+name+"*%0a"
    +"I want to tow my vehicle "
    +"from: *"+pickup+"*%0a"
    +"to: *"+dropoff+"*%0a"
    +"Call *"+phone+"* to pickup the vehicle. "
    +"And call *"+phone1+"* when at drop off.";
    
    window.open(url,'_blank').focus();
    }
    
   
  return (
    <form action=' ' onSubmit={Whatsapp} >
     <label className='label'>
        Name:
        <br />
        <i className='fa fa-user icon'></i>
        <input className='input' type="name" id="name"  required placeholder='Enter your name' pattern="[^\s][A-zÁ-ž\s]{1,}" title='Name must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label>
       <br />
     
      <label className='label'>
        Pick up location:
        <br />
        <i className='fa fa-map-marker icon'></i>
        <input className='input' type="location" id="pick"  required placeholder='Enter Pick up location' pattern="[^\s][A-zÁ-ž\s]{1,}" title='address must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label>
       <br />
       <label className='label'>
        Pick up Phone no:
        <br />
        <PhoneInput className='input' name="phone"  defaultCountry="NG" type="tel" value={phone} onChange={setPhone} pattern ="[0-9\s._%+-]{10,14}" autoComplete='off' title='Must be 11 digits without country code' space='off' required/>
        <span className='validity'></span>
      </label>
      <br />
       <label className='label'>
        Drop off location:
        <br />
        <i className='fa fa-map-marker icon'></i>
        <input className='input' type="location" id="drop"  required placeholder='Enter  Drop off location' pattern="[^\s][A-zÁ-ž\s]{1,}" title='address must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label>
       <br />
       <label className='label'>
      Drop off Phone no:
        <br />
        <PhoneInput className='input' name="phone"  defaultCountry="NG" type="tel" value={phone1} onChange={setPhone1}  pattern ="[0-9\s._%+-]{10,14}" autoComplete='off' title='Must be 11 digits without country code' space='off' required/>
        <span className='validity'></span>
      </label>
      <br />
      <button className='button-submit' type="submit" onclick="Whatsapp()">Submit on WhatsApp</button>
      <br />
      </form>
  );
}

export default ContactWhatsApp;