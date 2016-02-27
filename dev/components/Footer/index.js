import React from "react";

class Title extends React.Component {
  render(){
    return(
      <h3>{this.props.title}</h3>
    )
  }
}

export default class Footer extends React.Component {
  render(){
    return(
      <footer>
        <Title title={this.props.title}/>
      </footer>
    )
  }
}