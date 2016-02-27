import React from 'react';
import Orders from '../Modules/Orders/index';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h2>Home Page</h2>
        <Orders />
      </div>
    )
  }
}