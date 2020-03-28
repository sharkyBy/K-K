import React from 'react';

import { BurgerBtn } from './BurgerBtn';


export default class Nav extends React.Component {
 
  // state = { 
  //    activePage: document.documentURI,    

  // };

  componentDidMount() {
    // console.log(this.props, this.navRef);
  }

  // handleLinkClick = (linkName)=>{
  //   this.setState({
  //     activePage: linkName,
  //   });
  // }
  
 
  
  render() {
    // debugger;
    return (
     
      <nav className="navigation__nav" >        
        <BurgerBtn {...this.props} />        
      </nav>
    )
  }
}
 

//Option 2 start home page (not a link marker)

/* export default function Nav(props) {
  return(
    <nav className="navigation__nav">
    <ListLink {...props}  />
  </nav>
  )
} */