import React from 'react';
// import ContactMessenger from './ContactMessenger';
import Form from './Form';

export default class Contact extends React.Component {
  state = {
    phone: ""
  };

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });

    // console.log(`phone was changed`, e.target.value)
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(`event title:`,e)
  };

  render() {
    return (
      <div className="contact">
        <h1>contact</h1>
        <div className="contact__container">          
          <Form value = {this.state.form}
            handlePhoneChange={this.handlePhoneChange}
            handleSubmit={this.handleSubmit}
            {...this.props}
          />

          <div className='contact__info'>
            <div>+375 29 519-80-07</div>
            <div>contact@kandk.team</div>
            <div>
              <img src=''/>
              <img src=''/>
              <img src=''/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}