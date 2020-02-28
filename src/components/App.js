import React, { Fragment, Component } from 'react';
import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {



  render() {
    // debugger;
    return (
      <Fragment>      
        <Navigation data={this.props.staticData.header.navigation} />
        <Switch>
          <Route exact path='/'> <Mainpage {...this.props.staticData} />}</Route>
          <Route exact path='/mainpage'> <Mainpage {...this.props.staticData} />}</Route>
          <Route exact path='/community'><Community /></Route>  />
        </Switch>       
      </Fragment>
      /* <Fragment>
         <Navigation data={props.staticData.header.navigation} /> 
         <Mainpage {...props.staticData} />
         <Community />
  
      </Fragment> */

    );
  }
}

export default App;
