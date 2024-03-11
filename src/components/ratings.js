import React, { useRef } from 'react';
import './ratings.css';


const Rating = () => {
  const contentRef = useRef(null);
  const scrollBarRef = useRef(null);

  function scrollFunction() {
    const content = contentRef.current;
    const scrollBar = scrollBarRef.current;
    const scrollWidth = content.scrollWidth - content.clientWidth;
    const leftLimit = scrollWidth - 200;
    const scrollPosition = content.scrollLeft;
    const scrollPercentage = (scrollPosition / scrollWidth) * 10;
    scrollBar.style.width = `${scrollPercentage + 5}%`;


    if (scrollPosition > leftLimit) {
      document.getElementById("scroll-button").style.cursor = "not-allowed";
      document.getElementById("scroll-button").style.opacity = "0.5";
    } else if (scrollPosition > 20 ) {
      document.getElementById("scroll-button1").style.cursor = "pointer";
      document.getElementById("scroll-button1").style.opacity = "1";
      document.getElementById("scroll-button").style.cursor = "pointer";
      document.getElementById("scroll-button").style.opacity = "1";
    } else {
      document.getElementById("scroll-button1").style.cursor = "not-allowed";
      document.getElementById("scroll-button1").style.opacity = "0.5";
      document.getElementById("scroll-button").style.cursor = "pointer";
      document.getElementById("scroll-button").style.opacity = "1";
    }
   
   
  };
  

  const handleScrollLeft = () => {
    const content = contentRef.current;
    content.scrollLeft -= 400;
  };

  const handleScrollRight = () => {
    const content = contentRef.current;
    content.scrollLeft += 400;
  };
    
    return (
  
      <div className='rating' id='rating'>
            <head>

              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            </head>
            <h2 className='head'>Testimonials</h2>

            <div className='rating-container' >

                <button className='scroll-button' id='scroll-button1' onClick={handleScrollLeft} style={{ cursor: 'not-allowed', opacity: 0.5}}><i className='fa fa-arrow-left'></i></button>
                <div id="container" className='rate-container'  ref={contentRef} onScroll={scrollFunction}>

                  <div className='rate'  style={{ marginLeft: '10px'}}>
                      <div className='rate-heading'>
                      <a href="https://g.co/kgs/1H1k8n" target="_blank" rel="noreferrer">
                        <div className='rate-right'>
                            <h2 className='hero-img'>IA</h2>
                            <p id='fullname'>Iretiola Abebi</p>
                          
                        </div>
                      </a>             
                        
                        
                        <p>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                        </p>                  

                      </div>
                      <div className='rate-body'>
                      <p>They helped me transport my RX350 from Lagos to Abuja with no issues. They were so calm with answering all my many requests and provided updates each time I asked.</p>
                      </div>
                  </div>
                  <div className='rate'>
                      <div className='rate-heading'>
                      <a href="https://g.co/kgs/T1Gj5w" target="_blank" rel="noreferrer">
                        <div className='rate-right'>
                            <h2 className='hero-img'>FM</h2>
                            <p id='fullname'>Freddie Magik</p>
                          
                        </div>
                      </a>             
                        
                        
                        <p>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                        </p>                  

                      </div>
                      <div className='rate-body'>
                      <p>These people are quite professional, they helped tow my GX460 from Owerri to Lagos, I like how they handled the communication and the trip generally, especially when they had a police with my car around Ore. Doesn't seem like a one man company. They have my support anytime any day.</p>
                      </div>
                  </div>
                  <div className='rate'>
                      <div className='rate-heading'>
                      <a href="https://g.co/kgs/VDvJ29" target="_blank" rel="noreferrer">
                        <div className='rate-right'>
                            <h2 className='hero-img'>AO</h2>
                            <p id='fullname'>Angelique Ola</p>
                          
                        </div>
                      </a>             
                        
                        
                        <p>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                        </p>                  

                      </div>
                      <div className='rate-body'>
                      <p>I honestly have not experienced this level of professionalism in the tow-space in Lagos. Quick response time if you consider the traffic, and timely delivery of my car within a considerable distance at a fair price. It feels good to know there are outfits that still proffer great services. I would recommend 100%.</p>
                      </div>
                  </div>
                  <div className='rate'>
                      <div className='rate-heading'>
                      <a href="https://g.co/kgs/zQgTXQ" target="_blank" rel="noreferrer">
                        <div className='rate-right'>
                            <h2 className='hero-img'>EB</h2>
                            <p id='fullname'>Enilolobo Babajide</p>
                          
                        </div>
                      </a>             
                        
                        
                        <p>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                        </p>                  

                      </div>
                      <div className='rate-body'>
                      <p>Excellent Service was referred by a friend, had to tow a vehicle, reached out to them and the tow truck arrived soon enough. Professional handling and will always recommend.</p>
                      </div>
                  </div>
                  <div className='rate' style={{ marginRight: '10px'}}>
                      <div className='rate-heading'>
                      <a href="https://g.co/kgs/EPS9kf" target="_blank" rel="noreferrer">
                        <div className='rate-right'>
                            <h2 className='hero-img'>FN</h2>
                            <p id='fullname'>Freeway Ninja</p>
                          
                        </div>
                      </a>             
                        
                        
                        <p>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                        </p>                  

                      </div>
                      <div className='rate-body'>
                      <p>Drivers arrived in a timely manner and safety seemed to be their priority. Top notch!!</p>
                      </div>
                  </div>
                  <div className='rate' style={{ position: 'relative', marginRight: '10px'}}>
                  
                 
                      <div className='rate' style={{padding: '0px'}}>
                        
                        <button style={{ position: 'absolute', margin: '100px 40px', zIndex: 2, display: 'block', width: '200px', alignItems: 'center', height: '100px', borderRadius: 8, boxShadow: 'px 4px 10px #f4f5f5a4',}}>
                            <a href=" " target="_blank" rel="noreferrer"><p>Read more reviews</p></a>
                            </button>
                            
                        <div style={{filter: 'blur(10px)' }}>
                            <div className='rate-heading'>
                              <div className='rate-right'>
                                  <h2 className='hero-img'>FN</h2>
                                  <p id='fullname'>Freeway Ninja</p>
                                
                              </div>
                            
                              <p>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                              </p>                  

                            </div>
                            <div className='rate-body'>
                            <p>Drivers arrived in a timely manner and safety seemed to be their priority. Top notch!!</p>
                            </div>
                          </div>
                  </div>

                  </div>
                  
                </div>
                <button className='scroll-button' id='scroll-button' onClick={handleScrollRight} style={{ cursor: 'pointer', opacity: 1}}><i className='fa fa-arrow-right'></i></button>
            </div>

            <div className="scroll-bar-container">
              <div className="scroll-bar" ref={scrollBarRef}><button ></button></div>
           
            </div>
            
      </div>
      )
    };

    export default Rating;
