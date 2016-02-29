import React from 'react';

import Content    from './Content/index';
import Footer     from './Footer/index';
import Header     from './Header/index';
import Navigation from './Navigation/index';

export default class Layout extends React.Component {
  render(){
    const title = "Cash Register";
    return(
      <div>
        <Header title={title}/>
        <Navigation />
        <Content children={this.props.children}/>
        <Footer/>
      </div>
    );
  }
}