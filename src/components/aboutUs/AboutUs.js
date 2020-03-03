import React from 'react';
import AboutUsCarousel from '../aboutUs/AboutUsCarousel';
import AboutUsText from './AboutUsText';

 




class  AboutUs extends React.Component {
  // debugger;
  state={
    zIndex:'1',
    border:'2px solid red'
  }
  coords = (e) => {
    let Y = e.target.getBoundingClientRect().top
    let winY = window.scrollY;
    
    
    console.log(`client Y:${Y}; scroll Y:${winY}`)
  }

  handleScroll=() => {
    this.setState({
      zIndex:'1',
    border:'2px solid red'
    })    
  }
  


  render() {
   
    return (
    <div className='aboutUs' id ='aboutUs' >    
        <AboutUsText text={this.props.text} state={this.state} />

      <div className='aboutUs__carousel'>
        <AboutUsCarousel imgSrc={this.props.carousel.imgSrc} coords={this.coords}/>
      </div>


    </div>
  )
  }
  
}

export default AboutUs;