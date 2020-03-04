import React from 'react';
import AboutUsCarousel from '../aboutUs/AboutUsCarousel';
import AboutUsText from './AboutUsText';

 




class  AboutUs extends React.Component {
  // debugger;
  
  render() {
   
    return (
    <div className='aboutUs' id ='aboutUs' > 
       <div className='aboutUs__text'>
         <AboutUsText text={this.props.text} />
       </div>        

      <div className='aboutUs__carousel'>
        <AboutUsCarousel imgSrc={this.props.carousel.imgSrc} coords={this.coords}/>
      </div>
    </div>
  )
  }
  
}

export default AboutUs;