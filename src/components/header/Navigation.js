import React from 'react';
import Nav from './Nav';
import Lang from './Lang';
import Button from './Button'





export default class Navigation extends React.Component {

  render() {

    return (
      <div className="navigation" id='Mainpage'>
        <div className='navigation__container'>
          <Nav linkNames={this.props.data.page} {...this.props} />
          <Button btnName={this.props.data.btnName} classN='btn' />
          <Lang langName={this.props.data.lang} />
        </div>

      </div>
    )
  }
}