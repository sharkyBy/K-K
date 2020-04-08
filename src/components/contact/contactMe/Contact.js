import React, { useState } from 'react';
// import ContactMessenger from './ContactMessenger';
import Form from './Form';
import ContactInfo from './ContactInfo';
import validator from 'validator';



export default function Contact(props) {
  //  debugger;
  const [phone, setPhone] = useState('');
  const [callMe, setCallMe] = useState({ color: 'rgb(47,128,237)', id: 'callMe' });
  const [messageMe, setMessageMe] = useState({ color: '', id: '' });
 
  

  const handleContactMethodClick = (e) => {
    let val = e.currentTarget.id;
    switch (val) {
      case 'callMe':
        setCallMe({ color: 'rgb(47,128,237)', id: val });
        setMessageMe({ color: '', id: '' });
        break;
      case 'messageMe':
        setMessageMe({ color: 'rgb(47,128,237)', id: val });
        setCallMe({ color: '', id: '' });
        break;
      default:
        console.log("Неизвестное решение");
    };
    return val;
  };
  // console.log(callMe,messageMe);



  const contactMethod = [
    {
      id: 'callMe',
      color: callMe.color,
      handler: handleContactMethodClick,
      method: props.method[0]
    },
    {
      id: 'messageMe',
      color: messageMe.color,
      handler: handleContactMethodClick,
      method: props.method[1],

    },
  ];


  const handlePhoneChange = e => {    
    setPhone(e.target.value);
    //подсвечиваем поле инпута при положительной проверке **********
    let digit = e.target.value;
    let elem = e.currentTarget;
    // console.log(`phone was changed`, digit);

    if (validator.isMobilePhone(digit.replace(/\D/g, ""), 'be-BY')) {
      elem.classList.add('validSuccess');
    } else {      
      elem.classList.remove('validSuccess');     
    }

    // ************** конец блока подсветки поля ********************
  };

  // const handlePhoneBlur = e => {
  //   let elem = e.currentTarget;    
  //   // elem.classList.remove('validSuccess'); 
  // }

  const val = (callMe.id !== messageMe.id && callMe.id !== '' ? callMe.id : messageMe.id);
  let phoneNumber = `+${phone.replace(/\D/g, "")}`;



  const handleSubmit = (e) => {
    e.preventDefault();
    let inputPhone = document.querySelector('#telephone')

    const userContact = {
      phone: '',
      contactMe: '',
    }

    if (validator.isMobilePhone(phoneNumber, 'be-BY') && val !== '') {      
      
      userContact.phone = phoneNumber;
      userContact.contactMe = val;
      setPhone('');
      inputPhone.classList.remove('validSuccess');
      alert('Данные отправлены');
      return userContact;
      //{отправить объект}

    } else if (validator.isMobilePhone(phoneNumber, 'be-BY') && val === '') {
      alert('Не выбран способ связи');
    } else {
      alert('Неверный номер телефона или  номер не принадлежит операторам сотовой связи РБ')
    }

    console.log(userContact);

  };


  return (
    <div className="contact">
      <div className="contact__container">
        <Form
          formName={props.formName}
          contactMethod={contactMethod}
          btnName={props.btnName}
          before={props.before}
          value={phone}
          handlePhoneChange={handlePhoneChange}
          handleSubmit={handleSubmit}          
          className='btn contact__btn'
        />

        <ContactInfo
          tel={props.tel}
          mail={props.mail}
          contactInfoIcon={props.contactInfoIcon}
        />
      </div>
    </div>
  );

}