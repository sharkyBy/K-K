import React from 'react';
import ListCards from './ListCards';

export default function Project(props) {
  // debugger;
  return (
    <div className='project' id='project'>
      <ListCards card={props.project}/>      
    </div>
  )
}