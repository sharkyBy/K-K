import React from 'react';


// window.addEventListener('scroll',position);

export default function AboutUsScopes(props) {
  // debugger;


  return (
    <li onClick={(e) => console.log(e.target.getBoundingClientRect())}>
      <img src={props.imgSrc} alt={props.alt}/>
    </li>
  )
}
