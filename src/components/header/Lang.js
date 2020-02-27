
import React from 'react';
import LangLink from './LangLink';



export default function Lang(props) {
  // debugger;
  const langName = props.langName.map((item) =>
    (
      <LangLink langName={item.lang} idName={item.id} key={item.id} />
    )
  )
  return (
    <div className="navigation__lang">    
      {langName}
    </div>
  )
}
