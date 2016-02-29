import React from 'react';

import InventoryItems from '../Modules/Inventory/index';

export default class Inventory extends React.Component{
  render(){
    return(
      <div>
        <h3>Inventory</h3>
        <InventoryItems />
      </div>
    )
  }
};
