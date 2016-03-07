import React from 'react';
import InventoryManager from '../Modules/Inventory/index';

export default class Inventory extends React.Component{
  render(){
    return(
      <div>
        <h3>Inventory</h3>
        <InventoryManager url="/items" pollInterval={3000}/>
      </div>
    )
  }
};
