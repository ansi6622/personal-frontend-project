import React from "react";
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render(){
    const liStyle = {
      display: "inline",
      marginLeft: '10px'
    };
    return(
      <footer>
        <ul>
          <li style={liStyle}>&copy; 2015</li>
          <li style={liStyle}>Footer</li>
          <li style={liStyle}><Link to="contact" >Contact</Link></li>
        </ul>
      </footer>
    )
  }
}