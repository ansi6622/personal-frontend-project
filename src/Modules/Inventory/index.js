import React from 'react';
import * as ItemActions from '../../Util/Actions/ItemActions';
import ItemStore from '../../Util/Stores/ItemStore.js';

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
export default class InventoryManager extends React.Component{
  constructor(){
    super();
    this.getState = this.getState.bind(this);
    this.state = { items: [] };
  }
  getState(){
    this.setState({
      items: ItemStore.getState()
    })
  }
  componentDidMount(){
    this.setState({
      items: ItemActions.loadItems()
    });
  }
  componentWillMount(){
    ItemStore.on('change', this.getState);
  }
  componentWillUnmount(){
    ItemStore.removeListener("change", this.getState);
  }
  removeItem(idx){
    ItemActions.removeItem(idx);
  }
  render(){
    return(
      <div className="order-container">
        <div className="item-btns">
          <button onClick={this.removeItem.bind(this)}>Remove</button>
        </div>
        <form className="order-form" action="/insert-item" method="POST">
          <input type="text" placeholder="Item Name" name="title" />
          <input type="text" placeholder="Type" name="type" />
          <input type="text" placeholder="Quantity" name="qty" />
          <button className="submit-order" type="submit">Submit</button>
        </form>
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
