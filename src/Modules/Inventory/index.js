import React from 'react';

import * as ItemActions from '../../Actions/ItemActions';
import ItemStore from '../../Stores/ItemStore.js';

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
export default class InventoryItems extends React.Component{
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
    return(
      <div>
        <button onClick={this.reloadItems.bind(this)}>Reload</button>
        <button onClick={this.addItem.bind(this)}>Add</button>
        <button onClick={this.removeItem.bind(this)}>Remove</button>
        <ItemForm/>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}
class ItemList extends React.Component{
  render(){
    const itemNodes = this.props.items.map((item) =>
      <Items
        key={item.id}
        name={item.name}
        type={item.type}
        count={item.count} />
    );
    return(
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Count</th>
          </tr>
          {itemNodes}
        </tbody>
      </table>
    );
  }
}
class ItemForm extends React.Component{
  render(){
    return(
      <form action="/inventory" method="POST">
        <input
          type="text"
          placeholder="Item Name"
          name="name"
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
        />
        <input
          type="text"
          placeholder="Count"
          name="count"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}