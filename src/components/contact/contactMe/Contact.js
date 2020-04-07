import React, {useState, useEffect} from 'react';
// import ContactMessenger from './ContactMessenger';
import Form from './Form';
import ContactInfo from './ContactInfo';



export default function  Contact (props) {
//  debugger;
  const [phone,setPhone] = useState('');
  const [callMe, setCallMe] = useState({color:'', isActive: false});
  const [messageMe, setMessageMe] = useState({color:'', isActive:false});

  
  const handleContactMethodClick = (e) => {        
    let val = e.currentTarget.id;
    switch (val) {
      case 'callMe':
        setCallMe({color:'rgb(47,128,237)', isActive:true});
        setMessageMe({color:'', isActive:false});
        break;
      case 'messageMe':
        setMessageMe({color:'rgb(47,128,237)', isActive:true});
        setCallMe({color:'', isActive:false});
        break;
      default:
        console.log("Неизвестное решение");
    }; 
    
    
  };  
  // console.log(callMe,messageMe);

  const contactMethod = [
    {
      id:'callMe',
      color: callMe.color,
      handler: handleContactMethodClick,
      method:props.method[0]
    },
    {
      id:'messageMe',
      color: messageMe.color,
      handler: handleContactMethodClick,
      method:props.method[1],

    },
  ];
  

  const handlePhoneChange = e => {
    setPhone(e.target.value);    
    console.log(`phone was changed`, e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`event title:`, e)
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