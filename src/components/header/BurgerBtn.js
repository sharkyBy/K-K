import React, { useState } from 'react';
import { ListLink } from './ListLink';

export function BurgerBtn(props) {
  const [isActive, setIsActive] = useState(null);

  function activeBtn(event) {
    isActive !==null ? setIsActive(null):setIsActive({burger:'burgerBtn-active',menu:'navigation__link-active'});
    
    // console.log(event.currentTarget.tagName);
    
  }

  return (
    <div className='burger' onClick={activeBtn}>
      <span className={`burgerBtn ${isActive !== null? isActive.burger:null}`}></span>
      <ListLink {...props} classN={isActive !== null? isActive.menu:null}/>
    </div>
  )
}
