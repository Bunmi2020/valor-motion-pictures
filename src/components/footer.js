import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../media/image/logo.png';
import tiktok from '../media/image/facebook1.png';

import instagram from '../media/image/instagram1.png';

import './footer.css'

const Footer = () => {
    
  return (
    
    <div className='footer' id='footer'>
            <div className='footer-conclusion'>
                <img src={logo} alt='Mohrefring-NG' style={{minWidth: '10vw', maxWidth:'100px', margin: 'auhref 0%'}}/>
                
            </div>


            <div className='footer-body'>

                <div className='footer-contact' id='contact-us'>
                    <div className='contact-add'>
                     
                        <h3><a href="/contact" className="navbar__a">Contact Us</a></h3>
                        <a href='tel:+2348135330335'target="_blank" rel="noreferrer" style={{ minWidth: '150px'}}>  +234 813 5330 335</a>
                        <br />
                        <a href="mailto:contact@valormotionpictures.com" target="_blank" rel="noreferrer">support@valormotionpictures.com</a>
                    </div>

                    <div className='connect'>
                        <h3>Connect</h3>
                        <div className='socials'>
                        <a href="https://www.instagram.com/valormotion_pictures?" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://www.instagram.com/valormotion_pictures?" target="_blank" rel="noreferrer"><img src={tiktok} alt="TikTok"/></a>
                    
                        </div>
                    </div>
                </div>

                <div className='footer-company'>
                    <h2>Company</h2>
                    <li><a href="/about" className="navbar__a">About Us</a></li>
                    <li><a href="/video" className="navbar__a">Videos</a></li>
                    <li><a href="/photos" className="navbar__a">Photos</a></li>
                    <li><a href="/" >Stories</a></li>

                </div>

                <div className='footer-services'>
                    <h2>Service</h2>
                    <li><HashLink to="/video#weddings">Wedding</HashLink></li>
                    <li><HashLink to="/video#pre-weddings">Pre Weddings</HashLink></li>
                    <li><HashLink to="/video#birthdays">Birthdays</HashLink></li>
                    <li><HashLink to="/video#proposals">Proposals </HashLink></li>
                    <li><HashLink to="/video#ads">Advertisement</HashLink></li>
                    <li><HashLink to="/">Documentaries</HashLink></li>
                   
                </div>

            </div>

                <span className='divider' style={{}}> </span>

           
            
                <div className='copyrights'>
                <p>&copy; 2024 Valor Motion Pictures. All rights reserved</p>
                </div>
               
    </div>
  )
};

export default Footer;