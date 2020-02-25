import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import Project from './projects/Project'



export default function Main(props) {
  // debugger;
  return (
  <div className='main' >
    <div className='container'>
      <AboutUs aboutUs={props.data.aboutUs}/>
      <Project project={props.data.project}/>
       <div className='contact'>contacts</div>
    </div>
  </div>
  )
}
