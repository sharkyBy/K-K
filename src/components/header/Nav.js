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
/* 
export default class Nav extends React.Component {
 
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }

  state = {
     activeLink: this.props.linkNames[0],
   
  };

  componentDidMount() {
    console.log(this.props, this.navRef);
  }

  handleLinkClick = (linkName)=>{
    this.setState({
      activeLink: linkName,
    });
  } 
  
  render() {

    return (
      <nav className="navigation__nav" ref={this.navRef}>
        <ListLink
          linkNames={this.props.linkNames}
          activeLink={this.state.activeLink}
          handleLinkClick={this.handleLinkClick}
        />
      </nav>
    )
  }
}
 */

//Option 2 start home page (not a link marker)

export default function Nav(props) {
  return(
    <nav className="navigation__nav">
    <ListLink linkNames={props.linkNames}  />
  </nav>
  )
}