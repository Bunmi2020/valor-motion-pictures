import React, { useState, useEffect } from 'react';
import './header.css';
import menu from '../media/image/menu-bar.png';
import logo from '../media/image/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 750) {
      setIsToggle(false); // Close mobile menu if screen width is greater than 750px
    }
  }, [screenWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleNavLinkClick = () => {
    setIsToggle(false); // Collapse mobile menu when any navigation link is clicked
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <header
      className="App-header"
      style={{
        position: isScrollingUp ? 'sticky' : 'relative',
        top: isScrollingUp ? '0' : 'auto',
        transition: 'top 0.5s ease-in',
      }}
    >
      <p id="home" style={{ display: 'none' }}></p>
      <div className="App-nav">
        <div className="App-logo">
          <NavLink to="/" className="navbar__link" onClick={handleNavLinkClick}>
            <img src={logo} alt="Valor Pictures" />
          </NavLink>
        </div>

        <div className="App-menu">
          <div
            className="mobile-menu-button"
            onClick={() => {
              setIsToggle(!isToggle);
            }}
            style={{ width: '45px', height: '30px', background: 'none' }}
          >
            <img src={menu} alt="Menu" style={{ width: '30px', height: '25px' }} />
          </div>

          <div className="desktop-menu">
            <li>
              <NavLink to="/about" className="navbar__link" onClick={handleToTop}>
                About Us
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/contact" className="navbar__link" onClick={handleToTop}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleToTop}>Stories</NavLink>
            </li>
          </div>
        </div>
      </div>

      <ul className="mobile-menu" style={{ display: isToggle ? 'block' : 'none' }} id="menu">
        <li>
          <NavLink to="/about" className="navbar__link" onClick={handleNavLinkClick}>
            About Us
          </NavLink>
        </li>
                <li>
          <NavLink to="/contact" className="navbar__link" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick}>Stories</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
