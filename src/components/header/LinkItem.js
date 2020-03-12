import React from 'react';
import { NavLink } from 'react-router-dom';

// option 1

/* export default function LinkIten(props) {
 
 ;
    return (
      <li >
        <NavLink to={props.linkName !='mainpage' || props.linkName =='/'? `/${props.linkName}`:'/'} activeClassName={'activeLink'}>
          {props.linkName}
        </NavLink>         
      </li>

    )
  
} */

// option 2 start home page (not a link marker)

export default function LinkIten(props) {
  //  debugger;
 
  return (
   
    <li>
    <NavLink 
    to={`/${props.linkName}`} //TODO* Можно попробовать первую ссылку заенить на '/', чтобы убрать Redirect in Route
    className={props.isActive ? 'activeLink' : null} 
    onClick={props.onClick}
    >
      {props.pageName}
    </NavLink>      
  </li>
  )

}