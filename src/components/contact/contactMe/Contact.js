import React from 'react';
// import ContactMessenger from './ContactMessenger';
import Form from './Form';
import ContactInfo from './ContactInfo'


export default class Contact extends React.Component {
  state = {
    phone: ""
  };

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });

    console.log(`phone was changed`, e.target.value)
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`event title:`, e)
  };

  render() {
    return (
      <div className="contact">
        <div className="contact__container">
          <Form {...this.props}
            value={this.state.form}
            handlePhoneChange={this.handlePhoneChange}
            handleSubmit={this.handleSubmit}
            className='btn contact__btn'
          />
          <ContactInfo {...this.props}/>
        </div>
      </div>
    );
  }
}