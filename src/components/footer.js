import React from 'react';
import logo from '../media/image/logo.png';
import tiktok from '../media/image/facebook1.png';
import instagram from '../media/image/instagram1.png';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
 
  const handleToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
   
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-conclusion">
        <img src={logo} alt="Valor" style={{ minWidth: '10vw', maxWidth: '100px', margin: 'auto 0%' }} />
      </div>

      <div className="footer-body">
        <div className="footer-contact" id="contact-us">
          <div className="contact-add">
            <h3>
              <Link to="/contact" className="navbar__a" onClick={handleToTop}>
                Contact Us
              </Link>
            </h3>
            <i className='fa fa-phone icon'></i>
            <a href="tel:+2348135330335" target="_blank" rel="noreferrer" style={{ minWidth: '150px' }}>
              +234 813 5330 335
            </a>
            <br />
            <p> </p>
            <i className='fa fa-phone icon'></i>
            <a href="tel:+447587231496" target="_blank" rel="noreferrer" style={{ minWidth: '150px' }}>
              +44 75 8723 1496
            </a>
            <br />
            <p> </p>
            <i className='fa fa-envelope icon'></i>
            <a href="mailto:contact@valormotionpictures.com" target="_blank" rel="noreferrer">
              support@valormotionpictures.com
            </a>
          </div>

          <div className="connect">
            <h3>Connect</h3>
            <div className="socials">
              <a href="https://www.instagram.com/valormotion_pictures?" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@valormotionpictur" target="_blank" rel="noreferrer">
                <img src={tiktok} alt="TikTok" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-company">
          <h2>Company</h2>
          <li>
            <NavLink to="/about" className="navbar__a" onClick={handleToTop}>
              About Us
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/#home" className="navbar__a" onClick={handleToTop}>
              Stories
            </NavLink>
          </li>
        </div>

        <div className="footer-services">
          <h2>Recent Projects</h2>
          <li>
            <a href="https://drive.google.com/drive/folders/1CRF9xxLTk2J0RCo_L9ZViwLYq9EuvJuC?usp=drive_link" target="_blank" rel="noreferrer">Wedding</a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1CIwnQU4hyYdZzL59QshpHLZLiN2iqAMn?usp=drive_link" target="_blank" rel="noreferrer">Proposals</a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1CIQ1ty0Znlj04eIw7PoLCZ1Pez8NBVfU?usp=drive_link" target="_blank" rel="noreferrer">Pre Weddings</a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1CEzqTugI0_17kqxxEyBy6sYI8MSyntPp?usp=drive_link" target="_blank" rel="noreferrer">Birthdays</a>
          </li>
          
          <li>
            <a href="https://drive.google.com/drive/folders/1CEgP0mpiEs14B_K1gWsiBI01uOlt2KWJ?usp=drive_link" target="_blank" rel="noreferrer">Advertisement</a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1CZVDzlWKZkrcFToVFnW83z47Q2un5uy4?usp=drive_link" target="_blank" rel="noreferrer">Others</a>
          </li>
        </div>
      </div>

      <span className="divider" style={{}}></span>

      <div className="copyrights">
        <p>&copy; 2024 Valor Motion Pictures. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
