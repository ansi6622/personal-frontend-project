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
export default class InventoryManager extends React.Component{
  constructor(){
    super();
    this.getItems = this.getItems.bind(this);
    this.loadItems = this.loadItems.bind(this);
    this.state = { items: [] };
    // TODO console.log('constructor state: ', this.state.items);
  }
  componentDidMount(){
    this.setState({
      items: this.loadItems()
    });
    //  TODO  I can only get data to load in this
    // console.log('compDidMount state: ', this.state.items);
  }
  componentWillMount(){
    ItemStore.on('change', this.getItems);
    // TODO console.log('compWillMount state: ', this.state.items);
  }
  componentWillUnmount(){
    ItemStore.removeListener("change", this.getItems);
  }
  getItems(){
    this.setState({
      items: ItemStore.getAll()
    })
  }
  loadItems(){
    this.setState({
      items: ItemActions.loadItems()
    });
  }
  insertItem(title, type, qty){
    console.log('insertItem items: ', title, type, qty);
    // TODO ItemActions.insertItem(title, type, qty);
  }
  removeItem(idx){
    ItemActions.removeItem(idx);
  }
  handleItemSubmit(items){
    let item = this.state.items;
    let newItem = item.concat({items});
    this.setState({items: newItem});
    console.log(newItem);
    this.insertItem(item.title, item.type, item.qty);
  }
  render(){
    // TODO console.log('InventoryItems render: ', this.state.items);
    return(
      <div className="order-container">
        <div className="item-btns">
          <button onClick={this.removeItem.bind(this)}>Remove</button>
        </div>
        <ItemForm onItemSubmit={this.handleItemSubmit.bind(this)} />
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
    if(e.target.value.match(/\\d+$/))
      alert('hello');
    else
      this.setState({title: e.target.value});
  }
  handleTypeChange(e){
    if(e.target.value.match(/\\d+$/))
      alert('hello');
    else
      this.setState({type: e.target.value});
  }
  handleQTYChange(e){
    if(e.target.value.match(/[a-zA-Z\s]+/))
      alert('hello');
    else
    this.setState({qty: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    let title   = this.state.title;
    let type = this.state.type;
    let qty  = this.state.qty;
    if(!qty || !type || !title) return;
    console.log('handleSubmit item state: ', title, type, qty);
    this.props.onItemSubmit({title: title, type: type, qty: qty});
    this.setState({title: '', type: '', qty: ''})
  }
  render(){
    return(
      <form className="order-form" action="/insert-item" method="POST">
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