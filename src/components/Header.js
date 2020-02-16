import React from 'react';
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';


export default function Header(props) {
  debugger;
  return (
    
    <header className="header">
      <Navigation data={props.data.navigation}/>
      <HeaderContent data={props.data.content}/>     
    </header>
  
  )
  
}


