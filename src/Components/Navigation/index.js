import React from "react";
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render(){
    const floatRight = { float: "right" };
    const linkStyle = { marginLeft: "10px" };
    return(
      <nav style={floatRight}>
        <ul>
          <Link style={linkStyle} to='/'>Home</Link>
          <Link style={linkStyle} to='about'>About</Link>
          <Link style={linkStyle} to='contact'>Contact</Link>
        </ul>
      </nav>
    )
  }
}