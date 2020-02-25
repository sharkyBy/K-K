import React from 'react';


// window.addEventListener('scroll',position);

export default function AboutUsScopes(props) {
  // debugger;

// let coords = (e) => console.log(e.target.getBoundingClientRect())

  return (
    <li onClick={props.coords} id={props.id}>
      <img src={props.imgSrc} alt={props.alt}/>
    </li>
  )
}
