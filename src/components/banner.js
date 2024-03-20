import './banner.css';
import hero from '../media/image/camera.png';

function Banner () { 
  return (

    <div className="App-banner" >

      <div className='inner-banner'>
          
        <div className="banner-caption" >
        <h3>Telling ordinary stories <br/><span className='h-red'>in an extraordinary way</span></h3>
                    <p>...with a touch of class & glamour</p>
             <button><a href="https://wa.me/+447587231496" target="_blank" rel="noreferrer" >Let's talk</a></button>

        </div>
        <div className="banner-left-space" >
        <img src={hero} alt='Valor Motion Pictures' className='camera'/>
        </div>
      
      </div>

    </div>
    
  );
}

export default Banner;
