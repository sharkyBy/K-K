import React from 'react';
import ListCards from './ListCards';

export default function Project(props) {
  // debugger;
  console.log(`project props: ${props}`)
  return (
    <div className='project' id='project'>
      <ListCards {...props}/>      
    </div>
  )
}