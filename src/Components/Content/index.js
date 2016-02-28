import React from 'react';

export default class Content extends React.Component {
  render(){
    const clearBoth = { clear: "both" };
    return(
      <main style={clearBoth}>
        {this.props.children}
      </main>
    )
  }
}