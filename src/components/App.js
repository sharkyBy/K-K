import React from 'react';
import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';
import { Route, Switch, Redirect } from 'react-router';
import {userLang} from '../function/mainFunction.js'



class App extends React.Component {
  state = {
    lang: userLang,
    activePage:window.location.pathname === "/" ? "/mainpage" : window.location.pathname,
    
  };

  


  handleLinkClick = (linkName) => {    
    this.setState({
      activePage: linkName
    });    
    
  };

  handlerUserLang = userL => {
    this.setState({
      lang: userL
    });
  };

  render() {
    let redirect = this.state.lang.includes("ru")
      ? "staticData_ru"
      : "staticData";      

    return (
      <Switch>
        <Route>
          <Navigation
            {...this.props[redirect].header.navigation}
            handlerUserLang={this.handlerUserLang}
            language={this.state.lang}
            activePage={this.state.activePage}
            handleLinkClick={this.handleLinkClick}
            
            
          />
          <Route exact path="/">
            <Redirect to="/mainpage" />
          </Route>

          <Route exact path="/mainpage">
            <Mainpage {...this.props[redirect]} />
          </Route>

          <Route exact path="/community">
            <Community />
          </Route>
        </Route>
      </Switch>
    );
  }
}

export default App;