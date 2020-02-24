import React from 'react';

export default function Link(props) {

   
    return (
      <li className={props.isActive ? 'activeLink' : null} onClick={props.onClick}>
        <a href={`#${props.linkName}`}>
          {props.linkName}
        </a>      
      </li>
    )
  
}