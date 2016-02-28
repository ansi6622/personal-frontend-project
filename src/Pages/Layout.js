import React from 'react';

import Content    from '../Components/Content/index';
import Footer     from '../Components/Footer/index';
import Header     from '../Components/Header/index';
import Navigation from '../Components/Navigation/index';

export default class Layout extends React.Component {
  render(){
    const title = "Some Website";
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