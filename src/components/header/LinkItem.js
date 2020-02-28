import React from 'react';
import { NavLink } from 'react-router-dom';

// option 1

export default function LinkIten(props) {

    return (
      <li >
        <NavLink to={`/${props.linkName}`} activeClassName={'activeLink'}>
          {props.linkName}
        </NavLink>         
      </li>

    )
  
}

// option 2 start home page (not a link marker)

/* export default function LinkIten(props) {
   
  return (
   
    {<li className={props.isActive ? 'activeLink' : null} onClick={props.onClick}>
    <NavLink to={`/${props.linkName}`}>
      {props.linkName}
    </NavLink>      
  </li>}
  )

} */