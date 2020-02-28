import React from 'react';
import LinkItem from './LinkItem';



// option 1

export  const ListLink = (props) => {
  const listItem = props.linkNames.map((item) => (
    <LinkItem
      linkName={item}
      key={item}     
    />
  ))

  return (
    <ul className="navigation__link">    
      {listItem}
    </ul>
  )
}

//option 2 start home page (not a link marker)

/* export  const ListLink = (props) => {
  const listItem = props.linkNames.map((item) => (
    <LinkItem
      linkName={item}
      key={item}
      isActive={props.activeLink === item}
      onClick={() => props.handleLinkClick(item)}
    />
  ))

  return (
    <ul className="navigation__link">    
      {listItem}
    </ul>
  )
} */

export default ListLink;