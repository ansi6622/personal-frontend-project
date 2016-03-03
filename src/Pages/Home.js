import React from 'react';

import Orders from '../Modules/Orders/index';
import Timer from '../Modules/Mixin/index';

export default class Home extends React.Component {
  
  render(){
    return(
      <div>
        <h3>Can I take ya ooorda?</h3>
        <Timer initialCount={10}/>
        <Orders url='/api/orders' pollInterval={3000} />
      </div>
    )
  }
};