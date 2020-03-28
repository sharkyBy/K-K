import React from 'react';
import Nav from './Nav';
import Lang from './Lang';
import Button from './Button'





export default class Navigation extends React.Component {

  render() {
// debugger;
    return (
      <div className="navigation" id='navigation'>
        <div className='navigation__container'>
          <Nav  {...this.props} />
          <Button {...this.props} type='button' classN='btn navigation__btn'/>
          <Lang {...this.props} />
        </div>

      </div>
    )
  }
}