import React from 'react';

import Content    from './../components/Content/index';
import Footer     from './../components/Footer/index';
import Header     from './../components/Header/index';
import Navigation from './../components/Navigation/index';

export default class Layout extends React.Component {

  render(){
    const title = "Some Website";
    return(
      <div>
        <Header title={title}/>
        <Navigation />
        <Content children={this.props.children}/>
        <Footer title={title}/>
      </div>
    );
  }
}