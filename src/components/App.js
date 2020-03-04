import React from 'react';
import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';
import { Route, Switch } from 'react-router';



let userLang = (window.navigator.language ||
  window.navigator.systemLanguage ||
  window.navigator.userLanguage);

let winTop = window.pageYOffset;

function aboutUsScroll() {
  
  let textWrapper = [...document.querySelector('.aboutUs__text_wrapper').children];
  let carouselWrapper = [...document.querySelector('#carousel').children];
  let textWrap = document.querySelector('.aboutUs__text_wrapper');
  
  let top = carouselWrapper.map((item) => {
      let top = item.getBoundingClientRect().y;
      let height = item.getBoundingClientRect().height;
       
    return top + height / 2;    
  }
  );
  
  // console.log(top);  

  let y = textWrap.getBoundingClientRect().y;
  let h = textWrap.getBoundingClientRect().height;
  let textCenter = Math.round(y + h / 2);

  // el.scrollIntoView({block:"center",behavior: "smooth"}) 
console.log(`pictCenter: ${top}; textCenter: ${textCenter}; y: ${y}`)

  return (
    top.map((item,index) => {
      return ( 
      Math.round(item) <= textCenter && Math.round(item) >= Math.round(y)  ? textWrapper[index].style.opacity = '1' : 
      Math.round(item) <= h && Math.round(item) >= (textCenter + 0.9 * Math.round(h))  ? textWrapper[index].style.opacity = '1':textWrapper[index].style.opacity = '0'
      )
      }
  )
  )
    // pictCenter <= textCenter ? textWrapper.style.opacity = '1' : textWrapper.style.opacity = '0'
  
}

window.addEventListener('scroll', aboutUsScroll);


class App extends React.Component {
  state = {
    lang: userLang,
    scrollTop: winTop,

  }

  handlerUserLang = (userL) => {
    this.setState({
      lang: userL,
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
              <Mainpage {...this.props.staticData_ru}
                
              />
            </Route>

            <Route exact path='/mainpage'>
              <Mainpage {...this.props.staticData_ru}
               
              />
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


