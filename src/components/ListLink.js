import React from 'react';

export default function ListLink(props) {
  debugger;
  return (
    <li>
      <a href={`#${props.linkName}`}>{props.linkName}</a>      
    </li>
  )
}
