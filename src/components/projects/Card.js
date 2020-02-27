import React from 'react';

export default function Card(props) {
  // debugger;
  return (
    <figure className='project__card'>
      <img src={props.cards.srcImg} />
      <figcaption>
        <h1>{props.cards.title}</h1>
        <p>{props.cards.p}</p>
      </figcaption>

      <a href={`http://www.${props.cards.link}`} target ='_blank' > {props.cards.link}</a>
    </figure>
  )
}