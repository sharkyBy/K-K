import React from 'react';
import Link from './Link';


export const ListLink = (props) => {
  const listItem = props.linkNames.map((item) => (
    <Link
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
}

export default ListLink;
