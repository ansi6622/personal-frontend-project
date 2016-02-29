import React from 'react';

import * as ItemActions from '../Actions/ItemActions';
import ItemStore from '../Stores/ItemStore.js';

class Items extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.type}</td>
        <td>{this.props.count}</td>
      </tr>
    )
  }

}

export default class Inventory extends React.Component{
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
    ItemActions.addItem('Chicken Wings', 'BBQ', 50)
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
      return <Items
        key={item.id}
        name={item.name}
        type={item.type}
        count={item.count} />
    });
    return(
      <div>
        <h3>Inventory</h3>
        <button onClick={this.reloadItems.bind(this)}>Reload</button>
        <button onClick={this.addItem.bind(this)}>Add</button>
        <button onClick={this.removeItem.bind(this)}>Remove</button>
        <table><tbody>{itemArray}</tbody></table>
      </div>
    )
  }
};
