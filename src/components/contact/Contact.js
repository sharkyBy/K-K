import React from 'react';
import ContactMessenger from './ContactMessenger';

export default class Contact extends React.Component {

  state = {
    phone: '',
   
  }

 
  handlePhoneChange = (e) => {
    this.setState({phone:e.target.value})
   
    // console.log(`phone was changed`, e.target.value)
  };

  handleSubmit =(e) => {
   e.preventDefault();
    // console.log(`event title:`,e)

  }

  render() {
    return (
      <div className='contact'>
        <h1>contact</h1>
        <form className='contact__form'>
          <h2>callback form</h2>
          <input placeholder='+375 __ ___-__-__'            
            required="required"
            // pattern="\+{1,1}\d{3}\s{0,}\(([2]{1}([5]{1}|[9]{1}))|([3]{1}[3]{1})|([4]{1}[4]{1}))\s{0,}\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"

            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
          <div className='contact__messenger'>
            <ContactMessenger {...this.props} />
          </div>
          <button className='contact__button'
            onClick={this.handleSubmit}>
            Contact me
          </button>
        </form>
      </div>

    )
  }

}