import React from 'react';
import AboutUsCarousel from '../aboutUs/AboutUsCarousel';

 




export default function AboutUs(props) {
  // debugger;
 
  
  return (
    <div className='aboutUs' id ='aboutUs'>    
        <div className='aboutUs__text'>        
          <h1>{props.aboutUs.text.title}</h1>
          <p>
            {props.aboutUs.text.p1}                    
          </p>
        </div> 

      {/* <div className='container__aboutUs-scopes'>
        scopes
        </div> */}

      <div className='aboutUs__carousel'>
        <AboutUsCarousel imgSrc={props.aboutUs.carousel.imgSrc} />
      </div>


    </div>
  )
}