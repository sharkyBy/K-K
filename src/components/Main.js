import React from 'react';
import AboutUs from './AboutUs';


export default function Main(props) {
  // debugger;
  return (
  <div className='main'>
    <div className='container'>
      <AboutUs aboutUs={props.data.aboutUs}/>
      <div className='empty'>
        fsjdkfksjdgkl
      </div>
    </div>
  </div>
  )
}
