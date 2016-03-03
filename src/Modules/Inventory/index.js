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
    // TODO console.log('constructor state: ', this.state.items);
  }
  componentWillMount(){
    ItemStore.on('change', this.getItems);
    // TODO console.log('compWillMount state: ', this.state.items);
  }
  componentWillUnmount(){
    ItemStore.removeListener("change", this.getItems);
  }
  componentDidMount(){
      this.setState({
        items: this.loadItems()
      });
    // TODO console.log('compDidMount state: ', this.state.items);
  }
  getItems(){
    this.setState({
      items: ItemStore.getAll()
    })
  }
  loadItems(){
    ItemActions.loadItems();
  }
  removeItem(idx){
    ItemActions.removeItem(idx);
  }
  //handleItemSubmit(){
  //  ItemStore.on('change', this.getItems);
  //}
  render(){
    // TODO console.log('InventoryItems render: ', this.state.items);
    return(
      <div className="order-container">
        <div className="item-btns">
          <button>Edit</button>
          <button onClick={this.removeItem.bind(this)}>Remove</button>
        </div>
        <ItemForm onItemSubmit={this.getItems.bind(this)} />
        <ItemList items={this.state.items} />
      </div>
    )
  }
}
class ItemList extends React.Component{
  render(){
    // TODO console.log('ItemList props: ', this.props.items);
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
  constructor(){
    super();
    this.state = {title: '', type: '', qty: ''}
  }
  handleTitleChange(e){
    this.setState({title: e.target.value});
  }
  handleTypeChange(e){
    this.setState({type: e.target.value});
  }
  handleQTYChange(e){
    this.setState({qty: e.target.value});
  }
  handleSubmit(e){
    //e.preventDefault();
  }
  render(){
    //onSubmit={this.handleSubmit.bind(this)}
    return(
      <form className="order-form" action="/insert-item" method="POST" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Item Name"
          name="title"
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
          value={this.state.type}
          onChange={this.handleTypeChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Quantity"
          name="qty"
          value={this.state.qty}
          onChange={this.handleQTYChange.bind(this)}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}