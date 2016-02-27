import React from 'react';

import Orders from './../components/Orders/index';

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      item: 'Item'
    };
  }
  changeItem(item){
    this.setState({item});
  }
  render(){
    return(
      <div>
        <h2>Home Page</h2>
        <Orders
          changeItem={this.changeItem.bind(this)}
          item={this.state.item}
        />
      </div>
    )
  }
}