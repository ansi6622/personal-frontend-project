import React from 'react';

import Orders from '../Modules/Orders/index';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h3>Can I take ya ooorda?</h3>
        <Orders url='/api/orders' pollInterval={3000} />
      </div>
    )
  }
};

export default Home;