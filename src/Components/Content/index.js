import React from 'react';
import Timer from '../../Modules/Timer/index';

export default class Content extends React.Component {
  render(){
    const clearBoth = { clear: "both" };
    return(
      <main style={clearBoth}>
        <Timer initialCount={0}/>
        {this.props.children}
      </main>
    )
  }
}