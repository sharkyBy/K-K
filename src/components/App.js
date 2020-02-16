import React, { Fragment } from 'react';
import Header from './Header';
import Main from './Main';


function App(props) {
  debugger;
  return (
    <Fragment>
      <Header data={props.state.header} />
      <Main />
    </Fragment>

  );
}

export default App;
