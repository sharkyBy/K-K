import React, { Fragment } from 'react';

import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';

function App(props) {
  // debugger;
  return (
    <Fragment>
      <Navigation data={props.staticData.header.navigation} />
      <Mainpage {...props.staticData} />
      <Community />
    </Fragment>

  );
}

export default App;
