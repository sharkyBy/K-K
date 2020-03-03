import React from 'react';
import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';
import { Route, Switch } from 'react-router';



let userLang = (window.navigator.language ||
  window.navigator.systemLanguage ||
  window.navigator.userLanguage);





class App extends React.Component {
  state = {
    lang: userLang,
  }

  handlerUserLang = (userL) => {
    this.setState({
      lang:userL,
    })
  }
  render() {
    // debugger;
    if (this.state.lang.includes('ru')) {
      return (
        <Switch>
          <Route>
            <Navigation 
            {...this.props.staticData_ru.header.navigation}
            handlerUserLang={this.handlerUserLang}
            language={this.state.lang}

            />
            <Route exact path='/' >
              <Mainpage {...this.props.staticData_ru} />
            </Route>

            <Route exact path='/mainpage'>
              <Mainpage {...this.props.staticData_ru} />
            </Route>

            <Route exact path='/community'>
              <Community />
            </Route>
          </Route>

        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route>
            <Navigation 
            {...this.props.staticData.header.navigation}
            handlerUserLang={this.handlerUserLang}
            language={this.state.lang}
             />
            <Route exact path='/' >
              <Mainpage {...this.props.staticData} />
            </Route>

            <Route exact path='/mainpage'>
              <Mainpage {...this.props.staticData} />
            </Route>

            <Route exact path='/community'>
              <Community />
            </Route>
          </Route>

        </Switch>
      )
    }

  }
}




/* function App(props) {
  
  
  return (

    <Switch>
      <Route>
        <Navigation {...props.staticData.header.navigation}  />
        <Route exact path='/' >
          <Mainpage {...props.staticData} />
        </Route>

        <Route exact path='/mainpage'>
          <Mainpage {...props.staticData} />
        </Route>

        <Route exact path='/community'>
          <Community />
        </Route>
      </Route>


    </Switch>



  );
} */




export default App;


