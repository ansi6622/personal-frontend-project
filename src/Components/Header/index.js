import React from "react";

export default class Header extends React.Component {
  render(){
    const floatLeft = { float: "left" };
    return(
      <header style={floatLeft}>
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}