import React, { useState, useEffect } from 'react';
import './header.css';
import menu from '../media/image/menu-bar.png';
import logo from '../media/image/logo.png';
import { NavLink } from 'react-router-dom';


function Header () {

  const [isToggle, setIsToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
   /*  to toggle back mobile menu display upon screen size change*/
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
     if (screenWidth > 650) {
       setIsToggle(false);
     }
   }, [screenWidth]);
 
 
   /* when other part of the page is clicked and menu is open, it will close. 
   the square bracket is to ensure that the function unmounts after initial click
   so the menu button can reopen the menu when clicked again 
 
   window.addEventListener ('mouseup', function (event) {
     let menu = document.getElementById('menu');
     if (event.target !== menu && event.target.parentNode !== menu && isToggle ) {
       menu.style.display='none';
     }
     });*/


     /* to render call to action button active when on the current page*/

     let links = document.querySelectorAll('.navbar__link');

     if (links.length) {
      links.forEach ((link) => {
        link.addEventListener('click', (e) => {
          links.forEach((link) => {
            link.classList.remove('active');
          });
          e.preventDefault();
          link.classList.add('active');
        });
      });
     }

          /* to make header responsive to scrolling up

     const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
 
 */
  return ( 
   
      <header className="App-header" >
        <p id='home' style={{display: 'hidden'}}></p>
        <div className="App-nav">

            <div className='App-logo' >
            <NavLink to="/" className="navbar__link"><img src={logo} alt='Valor Motion Pictures'/></NavLink>
            </div>


          <div className='App-menu'>

            <div
                        className="mobile-menu-button"
                       onClick={() => {setIsToggle(!isToggle);}} 
                        style={{width: '45px', height: '30px', background: 'none'}}> 
                        <img src={menu} alt='Menu' style={{width: '30px', height: '25px'}} /> 
              </div>
           
              <div className='desktop-menu'>  
                <li><NavLink to="/about" className="navbar__link">About Us</NavLink></li>
                <li><NavLink to="/video" className="navbar__link">Videos</NavLink></li>
                <li><NavLink to="/photos" className="navbar__link">Photos</NavLink></li>
                <li><NavLink to="/contact" className="navbar__link">Contact</NavLink></li>
                <li><NavLink to="/" >Stories</NavLink></li>
            
              </div>

              
             
            </div>


        </div>

    

        <ul className='mobile-menu' style={{display: isToggle? 'block': 'none'}}
                        id="menu"> 
                <li><NavLink to="/about" className="navbar__link">About Us</NavLink></li>
                <li><NavLink to="/video" className="navbar__link">Videos</NavLink></li>
                <li><NavLink to="/photos" className="navbar__link">Photos</NavLink></li>
                <li><NavLink to="/contact" className="navbar__link">Contact</NavLink></li>
                <li><NavLink to="/" >Stories</NavLink></li>
                
        </ul>

       
      </header>
    
  );
}

export default Header;
