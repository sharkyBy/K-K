import React from 'react';


export default function PartnerLogo(props) {
  return (
    <div className="header__content-logo">
      <a href={props.partner.partnerLink} target ='_blank'>
        <img src={props.partner.partnerLogo} alt="Partner logo" />
        <span >{props.partner.partnerText}</span>
      </a>
    </div>
  )
}
