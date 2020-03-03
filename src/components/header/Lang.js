
import React from 'react';
import LangLink from './LangLink';



/* export default function Lang(props) {
  // debugger;
  const langName = props.lang.map((item) =>
    (
      <LangLink langName={item.lang} idName={item.id} key={item.id} />
    )
  )
  return (
    <div className="navigation__lang">    
      {langName}
    </div>
  )
} */



export default class Lang extends React.Component {

  state = {
    activeLang: this.props.language.includes('ru') ? 'ru' : 'en',
  };

  componentDidMount() {
    // console.log(this.props, this.navRef);
  }

  handleLangClick = (langState) => {
    this.setState(
      {
        activeLang: langState,
      }
    );
    this.props.handlerUserLang(langState)
  }

  render() {
    // debugger;

    const langName = this.props.lang.map((item) =>
      (
        <LangLink
          {...item}
          isActive={this.state.activeLang}
          key={item.id}
          onClick={() => this.handleLangClick(item.id)}
        />
      )
    )
    return (
      <div className="navigation__lang">
        {langName}
      </div>
    )
  }
}
