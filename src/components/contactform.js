import React, { useState, useRef } from 'react';
import emailjs  from 'emailjs-com';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function ContactForm() {
 
  const [status, setStatus] = useState("Send Message");
  const [sentNotification, setSentNotification] = useState(" ");

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phone1, setPhone1] = useState('');
  const [email, setEmail] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending Message...");
    emailjs.sendForm(
      'contact_mn',
      'template_ty8ygl7',
      form.current,
      '_wqVnLtDh3UrbmBnU'
    ).then((response) => {
      console.log(response.status, response.text);
      setStatus(status);
      setSentNotification("Message Sent, we would get back to you");
      setTimeout(() => {
        setSentNotification(" ")
      }, 5000);
      
    setName('');
    setPhone('');
    setPhone1('');
    setPickup('');
    setEmail('');
    setDropoff('');
    setPickup('');
    })
    .catch((err) => {
      console.log(err.text);
      setStatus(status);
      setSentNotification("Message failed to send!! Try again");
      setTimeout(() => {
        setSentNotification(" ")
      }, 5000);
    });

  }


  return (
    <form ref={form} onSubmit={onSubmit}>
    <head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

</head>
      <label className='label'>
        Name:
        <br />
        <i className='fa fa-user icon'></i>
        <input className='input' name="name" placeholder='Enter your name' type="text" value={name} onChange={(event) => setName(event.target.value)} required pattern="[^\s][A-zÁ-ž\s]{1,}" title='Name must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label>
       <br />
      <label className='label'>
        Email:
        <br />
        <i className='fa fa-envelope icon'></i>
        <input className='input' name="email" placeholder='Enter your email' type="email" value={email} onChange={(event) => setEmail(event.target.value)} required pattern ='[a-z0-9._%+-]+@[a-z0-9.-+]+\.' />
        <span className='validity'></span> 
      </label>
      <br />
      
      <label className='label'>
        Pick up location:
       
      <br />
        <i className='fa fa-map-marker icon'></i>
        <input className='input' type="text" name="pickup" id="pickup" value={pickup}  onChange={(event) => setPickup(event.target.value)} required placeholder='Enter Pick up location' pattern="[^\s][A-zÁ-ž\s]{1,}" title='Name must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label> 
      <br />
        <label className='label'>
        Pick up Phone no:
        <br />
        <PhoneInput className='input' name="phone" defaultCountry="NG" type="tel" value={phone} onChange={setPhone} placeholder='Enter Phone number'  pattern ="[0-9\s._%+-]{11,14}" autoComplete='off' title='Must be 11 digits without country code' space='off' required/>
        <span className='validity'></span>
      </label>
       <br />
       <label className='label'>
        Drop off location:
        <br />
        <i className='fa fa-map-marker icon'></i>
        <input className='input' type="dropoff" name="dropoff" id="dropoff" value={dropoff} onChange={(event) => setDropoff(event.target.value)} required placeholder='Enter drop off location' pattern="[^\s][A-zÁ-ž\s]{1,}" title='Name must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label>
      
      <br />
      <label className='label'>
      Drop off Phone no:
        <br />
        <PhoneInput className='input' name="phone1" defaultCountry="NG" type="tel" value={phone1} onChange={setPhone1} placeholder='Enter Phone number'  pattern ="[0-9\s._%+-]{11,14}" autoComplete='off' title='Must be 11 digits without country code' space='off' required/>
        <span className='validity'></span>
      </label>
     
      <br />
      <button className='button-submit' type="submit" style={{cursor: (sentNotification === 'Message Sent, we would get back to you')? 'not-allowed' : 'pointer', background: (sentNotification === 'Message Sent, we would get back to you')? '#e7e8f7' : '#262C71'}}>{status}</button>
      <br />
      <span className='sentNotification' style={{color: (sentNotification === 'Message Sent, we would get back to you')? '#037e03' : '#ff0000', padding: '5px'}}>{sentNotification}</span>
    </form>
  );
}

export default ContactForm;