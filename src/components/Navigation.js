import React from 'react';
import Nav from './Nav';
import Lang from './Lang';



export default function Navigation(props) {
  // debugger;
  return (
    <div className="header__navigation" id='Mainpage'>
      <div className="header__logo">K&K</div>
      <Nav linkName={props.data.page}/>
      <Lang langName = {props.data.lang}/>
    </div>
  )
}