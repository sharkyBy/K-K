import React from 'react';


function AboutUsTextItem(props) {
  // debugger;



  return (
    <div className={props.index !== 0 ? 'hidden' : 'visible'} >
      <h1>{props.text.title}</h1>
      <p>
        {props.text.p1}
      </p>
      <div
        className={props.index !== 0 ? 'aboutUs__btn' : null}
      >
        {props.index !== 0 ? props.text.btnName:null}
      </div>
    </div>

  )
}

export default AboutUsTextItem;