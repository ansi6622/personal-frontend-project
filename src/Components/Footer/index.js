import React from "react";
import { Link } from 'react-router';

const Footer = () => {
  const liStyle = {
    display: "inline",
    marginLeft: '10px'
  };
  return(
    <footer>
      <ul>
        <li style={liStyle}>&copy; 2015</li>
        <li style={liStyle}>Cash Register</li>
        <li style={liStyle}><Link to="contact" >Contact</Link></li>
      </ul>
    </footer>
  )
};

export default Footer;