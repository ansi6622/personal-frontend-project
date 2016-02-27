import React from "react";

class Title extends React.Component {
  render(){
    return(
      <h1>{this.props.title}</h1>
    )
  }
}

export default class Header extends React.Component {
  render(){
    return(
      <header>
        <Title title={this.props.title}/>
      </header>
    )
  }
}