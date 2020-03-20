import React from 'react';
import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';
import { Route, Switch, Redirect } from 'react-router';
import {userLang,pseudo} from '../Function.js'



class App extends React.Component {
  state = {
    lang: userLang,
    activePage:window.location.pathname === "/" ? "/mainpage" : window.location.pathname,
    // pseudo:pseudo,
  };

  handleLinkClick = linkName => {
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
    console.log(this.state);
    // debugger;
    // let activePage = this.props.staticData.header.navigation.page[0];

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
    // } else {
    //   return (
    //     <Switch>
    //       <Route>
    //         <Navigation
    //           {...this.props.staticData.header.navigation}
    //           handlerUserLang={this.handlerUserLang}
    //           language={this.state.lang}
    //         />
    //         <Route exact path='/' >
    //           <Redirect to='/mainpage' />
    //         </Route>

//         <Route exact path='/mainpage'>
//           <Mainpage {...this.props.staticData} />
//         </Route>

//         <Route exact path='/community'>
//           <Community />
//         </Route>
//       </Route>

//     </Switch>
//   )
// }

// }





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