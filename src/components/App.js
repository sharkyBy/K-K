import React from 'react';
import Mainpage from './Mainpage';
import Community from './Community';
import Navigation from './header/Navigation';
import { Route, Switch, Redirect } from 'react-router';


// Получение языка браузера
let userLang = (window.navigator.language ||
  window.navigator.systemLanguage ||
  window.navigator.userLanguage);
// console.log(document.documentURI)

// Обработка события "scroll" для блока about Us 
document.addEventListener('scroll', ()=>{validUrl(aboutUsScroll,removeEvent)}, 
false);

function validUrl(func1,func2) {
  document.documentURI.includes('/community') ? func2(): func1();
  
}

function removeEvent() {
  document.removeEventListener('scroll',aboutUsScroll);
  console.log('функция получения координат по событию scroll удалена!')
}
// Функция на событие скролл 
function aboutUsScroll() {
  let textWrap = document.documentElement.querySelector('.aboutUs__text_wrapper');
  let textWrapper = [...textWrap.children];
  let carouselWrapper = [...document.documentElement.querySelector('#carousel').children];

  let top = carouselWrapper.map((item) => {
    let y = item.getBoundingClientRect().y;
    let height = item.getBoundingClientRect().height;

    return y + height / 2;
  }
  );


  let y = textWrap.getBoundingClientRect().y;
  let h = textWrap.getBoundingClientRect().height;
  let textCenter = Math.round(y + h / 2);

  // el.scrollIntoView({block:"center",behavior: "smooth"}) 
  console.log(`pictCenter: ${top}; textCenter: ${textCenter}; y: ${y}`)

  return (
    top.map((item, index) => {
      return (
        Math.round(item) <= textCenter && Math.round(item) >= Math.round(y) ? textWrapper[index].style.opacity = '1' :
          Math.round(item) <= h && Math.round(item) >= (textCenter + 0.9 * Math.round(h)) ? textWrapper[index].style.opacity = '1' : textWrapper[index].style.opacity = '0'
      )
    }
    )
  )


}





class App extends React.Component {
  state = {
    lang: userLang,
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
              <Redirect to='/mainpage' />
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


