import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import Project from './projects/Project';
import Contact from './contact/Contact';


export default function Main(props) {
  // debugger;
  return (
  <main className='main' >
    <div className='container'>
      <AboutUs {...props.data.aboutUs} />
      <Project {...props.data.project} />
      <Contact {...props.data.contact} />
    </div>
  </main>
  )
}
