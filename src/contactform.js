import React, { useState, useRef } from 'react';
import emailjs  from 'emailjs-com';
import './contact.css';

function ContactForm() {
 
  const [status, setStatus] = useState("Send Message");
  const [sentNotification, setSentNotification] = useState(" ");

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] =useState('');

  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending Message...");
    emailjs.sendForm(
      'Valor_pictures',
      'template_fp499fo',
      form.current,
      'H00ltyMzL0c4qLm2J'
    ).then((response) => {
      console.log(response.status, response.text);
      setStatus("Send Message");;
      setSentNotification("Message Sent, we would get back to you");
      setTimeout(() => {
        setSentNotification(" ")
      }, 5000);
      
    setName('');
    setPhone('');
   
    setEmail('');
    
    setMessage('');
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
        Phone no:
        <br />
        <i className='fa fa-phone icon'></i>
        <input className='input' name="phone" defaultCountry="NG" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='Enter Phone number' pattern="[0-9]{11,14}" autoComplete='off' title='Must be 11 digits without country code' space='off' required/>
        <span className='validity'></span>
      </label>
       <br />
       
      <label className='label'>
     Message:
        <br />
        <textarea rows="5" className='message' name="message"  value={message} onChange={(event) => setMessage(event.target.value)} placeholder='Enter your message here' title='Must be at least 10 characters' required></textarea>
        <span className='validity'></span>
      </label>
     
      <br />
      <button className='button-submit' type="submit" style={{cursor: (sentNotification === 'Message Sent, we would get back to you')? 'not-allowed' : 'pointer', background: (sentNotification === 'Message Sent, we would get back to you')? '#e7e8f7' : '#262C71'}}>{status}</button>
      <br />
      <span className='sentNotification' style={{color: (sentNotification === 'Message Sent, we would get back to you')? 'green' : '#ff0027', padding: '5px'}}>{sentNotification}</span>
    </form>
  );
}

export default ContactForm;