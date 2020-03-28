import React, { useState } from 'react';
import Button from './../header/Button';

export default function Form(props) {
const [callMe,setCallMe] = useState(null);
const [messageMe,setMessageMe] = useState(null)

  return (
    <form className="contact__form" name='contactMe'>
      <h2>{props.formName}</h2>
      <input
        placeholder="+375 __ ___-__-__"
        required="required"
        // pattern="\+{1,1}\d{3}\s{0,}\(([2]{1}([5]{1}|[9]{1}))|([3]{1}[3]{1})|([4]{1}[4]{1}))\s{0,}\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"

        value={props.value}
        onChange={props.handlePhoneChange}
      />
      <div className='contact__method'>
        <span>{props.before}</span>
        <div className='contact__method_select'
          onClick={() => setCallMe(console.log(document.title))}>
          {props.callMe}
        </div>
        <div className='contact__method_select'
        onClick={()=>setMessageMe(messageMe + 1)}> {props.messageMe} {messageMe}</div>
      </div>

      <Button 
        onClick={props.handleSubmit}        
        btnName={props.btnName}
        type='button'
        classN='btn contact__btn'
        form='contactMe' />        
      
    </form>
  )

}
