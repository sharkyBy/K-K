import React, { Fragment } from 'react';
import Header from './Header';
import Main from './Main';


function App(props) {
  // debugger;
  return (
    <Fragment>
      <Header data={props.staticData.header} />
      <Main data={props.staticData.main}/>
    </Fragment>

  );
}

export default App;
