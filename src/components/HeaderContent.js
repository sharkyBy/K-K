import React from 'react';
import PartnerLogo from './PartnerLogo';
import Arrow from './Arrow';

export default function HeaderContent(props) {
  return (
    <div className="header__content">
      <h1>{props.data.title}</h1>
      <PartnerLogo partner={props.data} />
      <Arrow />
    </div>
  )
}