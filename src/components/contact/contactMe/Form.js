import React, { useState } from 'react';
import Button from '../../Button';
import PhoneInput from './PhoneInput';
import ContactMethod from './ContactMethod';

export default function Form(props) {
  
  // debugger;
  return (
    <form className="contact__form" name='contactMe'>
      <h2>{props.formName}</h2>

      <PhoneInput
        value={props.value}
        onChange={props.handlePhoneChange}
        
      />

      <ContactMethod 
        before={props.before}        
        contactMethod={props.contactMethod}       
      />

      <Button
        onClick={props.handleSubmit}
        btnName={props.btnName}
        type='button'
        classN='btn contact__btn'
        form='contactMe' />

    </form>
  )

}
