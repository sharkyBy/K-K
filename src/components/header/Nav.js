import React from 'react';
import {ListLink} from './ListLink';


/* export default function Nav(props) {
  const listItem = props.linkName.map((item) => <ListLink linkName = {item} key = {item} classN='activeLink'/>)
  // debugger;
  return (
    <nav className="header__nav">
    <ul className="header__link">
     {listItem}
    </ul>
  </nav>
  )
} */

//Option 1



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
        <ListLink
        {...this.props}
        //  linkNames={this.props.page}
          // activePage={this.state.activePage}
          // handleLinkClick={this.handleLinkClick}
         
        />
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