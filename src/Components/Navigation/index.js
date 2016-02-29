import React from "react";
import { Link } from 'react-router';

const Navigation = () => {
  const floatRight = { float: "right" };
  const linkStyle = { marginLeft: "10px" };
  return(
    <nav style={floatRight}>
      <ul>
        <Link style={linkStyle} to='/'>Home</Link>
        <Link style={linkStyle} activeClassName="active" to='inventory'>Inventory</Link>
        <Link style={linkStyle} activeClassName="active" to='settings'>Settings</Link>
      </ul>
    </nav>
  )
};

export default Navigation;