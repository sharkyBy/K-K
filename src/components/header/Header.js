import React from 'react';
// import Navigation from './Navigation';
import HeaderContent from './HeaderContent';


export default function Header(props) {
  // debugger;
  
  return (

    <header className="header">
      <div className='header__container' >        
        <HeaderContent data={props.data.content} />
      </div>

    </header>

  )

}


