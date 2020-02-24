import React from 'react';
import Nav from './Nav';
import Lang from './Lang';
import Button from './Button' 





export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
     // debugger;
  return (
    <div className="header__navigation" id='Mainpage'>      
      <Nav linkNames={this.props.data.page} {...this.props} />
      <Button btnName={this.props.data.btnName} classN='btn'/>
      <Lang langName = {this.props.data.lang}/>
    </div>
  )
  }
}