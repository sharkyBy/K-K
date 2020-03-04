import React, { Fragment } from 'react';

import Header from './header/Header';
import Main from './Main';

export default function Mainpage(props) {
  // debugger;
  return (
    <Fragment>
      <Header data={props.header} />
      <Main data={props.main}
     
       />
    </Fragment>

  )
}
