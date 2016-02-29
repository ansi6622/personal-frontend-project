import React from 'react';

import * as ItemActions from '../Actions/ItemActions';
import ItemStore from '../Stores/ItemStore.js';

export default class About extends React.Component{
  constructor(){
    super();
    this.state = {
      items: ItemStore.getAll()
    }
  }

  componentWillMount(){
    ItemStore.on('change', () =>{
      this.setState({
        items: ItemStore.getAll()
      })
    })
  }
  addItem(){
    ItemActions.addItem('Another Item')
  }
  removeItem(idx){
    ItemActions.removeItem(idx);
  }
  reloadItems(){
    ItemActions.reloadItems();
  }

  render(){
    const { items } = this.state;
    const itemArray = items.map((item) =>{
      return <li key={item.id}>{item.name}</li>
    });
    return(
      <div>
        <h3>More items...</h3>
        <button onClick={this.reloadItems.bind(this)}>Reload</button>
        <button onClick={this.addItem.bind(this)}>Add</button>
        <button onClick={this.removeItem.bind(this)}>Remove</button>
        <ul>{itemArray}</ul>
      </div>
    )
  }
};
