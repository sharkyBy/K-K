import React from 'react';

export default function ContactMessengerIcon(props) {
  // console.log(props)
  return (
    <li >
    <a href={props.link} target ='_blank' alt={props.name}>
      <img src={props.src} />
    </a>
  </li>
  )
}