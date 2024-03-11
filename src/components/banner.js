import './banner.css';
import hero from '../media/image/camera.png';

function Banner () { 
  return (

    <div className="App-banner" >

      <div className='inner-banner'>
          
        <div className="banner-caption" >
        <h3>Documenting your memories <br/><span className='h-red'>in the most amazing way</span></h3>
                    <p>...not just glamourous, but classy</p>
             <button><a href="https://wa.me/+2348135330335" target="_blank" rel="noreferrer" >Let's talk</a></button>

        </div>
        <div className="banner-left-space" >
        <img src={hero} alt='Valor Motion Pictures' className='camera'/>
        </div>
      
      </div>

    </div>
    
  );
}

export default Banner;
