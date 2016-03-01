import React from 'react';
import $     from 'jquery';

class Order extends React.Component {
  render(){
    return(
      <tr className="order">
        <td><span>{this.props.name}</span></td>
        <td><span>{this.props.option}</span></td>
        <td><span>{"$"+this.props.price}</span></td>
        <td className="button-col">
          <button className="delete-name">X</button>
        </td>
      </tr>
    )
  }
}
export default class Orders extends React.Component {
  constructor(){
    super();
    this.state ={ data: [] };
  }
  loadOrders(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (status, err) => {
        console.log(this.props.url, status, err.toString());
      }
    })
  }
  handleOrderSubmit(order){
    let orders = this.state.data;
    order.id = Date.now();
    let newOrders = orders.concat({orders});
    this.setState({data: newOrders});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      method: 'POST',
      data: order,
      success: (data) => {
        this.setState({data: data});
      },
      error: (status, err) => {
        this.setState({data: orders});
        console.error(this.props.url, status, err.toString());
      }
    })
  }
  componentWillMount(){
    this.loadOrders();
    setInterval(this.loadOrders.bind(this), this.props.pollInterval);
  }
  render(){
    return(
      <div className="order-container">
        <OrderForm onOrderSubmit={this.handleOrderSubmit.bind(this)}/>
        <OrderList data={this.state.data}/>
      </div>
    )
  }
}
class OrderList extends React.Component {
  render() {
    const orderNodes = this.props.data.map((order, i)=>
      <Order
        name={order.item.name}
        option={order.item.option}
        price={order.item.price}
        key={i}  >
      </Order>
    );
    return(
      <div className="order-list">
        <table>
          <tbody>
            {orderNodes}
          </tbody>
        </table>
      </div>
    )
  }
}
class OrderForm extends React.Component {
  constructor(){
    super();
    this.state = {name: '', option: '', price: ''}
  }
  handleItemChange(e){
    this.setState({name: e.target.value});
  }
  handleOptionChange(e){
    this.setState({option: e.target.value});
  }
  handlePriceChange(e){
    this.setState({price: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    let name   = this.state.name;
    let option = this.state.option;
    let price  = this.state.price;
    if(!price || !option || !name) return;
    this.props.onOrderSubmit({name: name, option: option, price: price});
    this.setState({name: '', option: '', price: ''})
  }
  render(){
    return(
      <form className="order-form"
            onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Item Name"
          name="name"
          value={this.state.name}
          onChange={this.handleItemChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Option"
          name="option"
          value={this.state.option}
          onChange={this.handleOptionChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={this.state.price}
          onChange={this.handlePriceChange.bind(this)}
        />
        <button className="submit-order" type="submit">Add Item</button>
      </form>
    )
  }
}