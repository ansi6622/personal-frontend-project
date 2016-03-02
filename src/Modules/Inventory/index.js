import React from 'react';
import * as ItemActions from '../../Actions/ItemActions';
import ItemStore from '../../Stores/ItemStore.js';

class Items extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.type}</td>
        <td>{this.props.qty}</td>
      </tr>
    )
  }
}
export default class InventoryItems extends React.Component{
  constructor(){
    super();
    this.getItems = this.getItems.bind(this);
    this.state = { items: [] };
    console.log('comp initial state: ', this.state.items);
  }
  componentWillMount(){
    ItemStore.on('change', this.getItems);
    console.log('comp will mount: ', this.state.items);
  }
  componentWillUnmount(){
    ItemStore.removeListener("change", this.getItems);
  }
  componentDidMount(){
      this.setState({
        items: this.loadItems()
      });
    console.log('comp did mount: ', this.state.items);
  }
  getItems(){
    this.setState({
      items: ItemStore.getAll()
    })
  }
  loadItems(){
    ItemActions.loadItems();
  }
  addItem(){
    ItemActions.addItem('Chicken Wings', 'BBQ', 50);
  }
  removeItem(idx){
    ItemActions.removeItem(idx);
  }
  render(){
    console.log('inside comp state render: ', this.state.items);
    return(
      <div className="order-container">
        <div className="item-btns">
          <button>Edit</button>
          <button onClick={this.addItem.bind(this)}>Add</button>
          <button onClick={this.removeItem.bind(this)}>Remove</button>
        </div>
        <ItemForm/>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}
class ItemList extends React.Component{
  render(){
    console.log('inside child comp props render: ', this.props.items);
    const itemNodes = this.props.items.map((item) =>
      <Items
        key={item.id}
        title={item.title}
        type={item.type}
        qty={item.qty}/>
    );
    return(
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
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
      <form className="order-form">
        <input
          type="text"
          placeholder="Item Name"
          name="title"
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
        />
        <input
          type="text"
          placeholder="Quantity"
          name="qty"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}