import React from 'react';
import ListLink from './ListLink';

export default function Nav(props) {
  const listItem = props.linkName.map((item) => <ListLink linkName = {item} key = {item} />)
  debugger;
  return (
    <nav className="header__nav">
    <ul className="header__link">
     {listItem}
    </ul>
  </nav>
  )
}