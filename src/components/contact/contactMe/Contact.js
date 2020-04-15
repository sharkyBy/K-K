import React, { useState } from 'react';
import Form from './Form';
import ContactInfo from './ContactInfo';
import validator from 'validator';



export default function Contact(props) {
  //  debugger;
  const [phone, setPhone] = useState({number:'', addClass:''});
  const [callMe, setCallMe] = useState({ color: '', id: '' });
  const [messageMe, setMessageMe] = useState({ color: '', id: '' });
  const [borderColor, setBorderColor] = useState({phoneLine:'', methodLine:''});
 
  const userContact = {
    phone: '',
    contactMe: '',
  }
  

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
    setBorderColor({phoneLine:'', methodLine:''})
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
    
    setBorderColor({phoneLine:'', methodLine:''});
    
    //подсвечиваем поле инпута при положительной проверке **********
    let digit = e.target.value;
    setPhone({number:digit, classN:''});
    
    // console.log(`phone was changed`, digit);

    if (validator.isMobilePhone(digit.replace(/\D/g, ""), 'be-BY')) {
      
      setPhone({number:digit, classN: 'validSuccess'});
    } else {      
      
      setPhone({number:digit, classN: ''});    
    }

    // ************** конец блока подсветки поля ********************
  };

  

  const val = (callMe.id !== messageMe.id && callMe.id !== '' ? callMe.id : messageMe.id);
  let phoneNumber = phone.number.replace(/\D/g, "");
  // console.log(phone)



  const handleSubmit = (e) => {
    console.log(phoneNumber);
    e.preventDefault();    

    

    if (validator.isMobilePhone(phoneNumber, 'be-BY') && val !== '') {      
      
      userContact.phone = phone.number;
      userContact.contactMe = val;

      setPhone({number:'', classN:''});
      callMe.id !== "" ? setCallMe({color:'', id:''}):setMessageMe({color:'', id:''});
      setBorderColor({phoneLine:'', methodLine:''})

      alert(props.alert.success);     
      

    } else if (validator.isMobilePhone(phoneNumber, 'be-BY') && val === '') {
      alert(props.alert.noMethodSelected);
      setBorderColor({phoneLine:'', methodLine:'red'});
    } else {
      alert(props.alert.invalidPhoneNumber);
      setBorderColor({phoneLine:'red', methodLine:''});
    }

    console.log(userContact);
    return userContact;
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
          borderColor={borderColor}
          // userContact={userContact}
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