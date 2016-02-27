import React from 'react';

export default class Content extends React.Component {
  render(){
    return(
      <main >
        {this.props.children}
      </main>
    )
  }
}