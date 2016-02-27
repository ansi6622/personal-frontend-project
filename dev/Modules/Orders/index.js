import React from 'react';
import DATA  from '../../../orders.json';

class Order extends React.Component {
  render(){
    return(
      <tr className="order">
        <td><span>{this.props.name}</span></td>
        <td><span>{this.props.option}</span></td>
        <td><span>{"$"+this.props.price}</span></td>
        <td className="button-col">
          <button className="delete-item">X</button>
        </td>
      </tr>
    )
  }
}
export default class Orders extends React.Component {
  constructor(){
    super();
    this.state ={
      data: {DATA},
      item: 'Item 1',
      option: 'Option 1',
      price: '$Price'
    }
  }
  addItem(item){
    this.setState({item})
  }
  addOption(option){
    this.setState({option})
  }
  addPrice(price){
    this.setState({price})
  }
  render(){
    return(
      <div className="order-container">
        <OrderForm
          addItem={this.addItem.bind(this)}
          addOption={this.addOption.bind(this)}
          addPrice={this.addPrice.bind(this)}
          item  ={this.state.item}
          option={this.state.option}
          price={this.state.price}
        />
        <OrderList data={this.state.data}/>
      </div>
    )
  }
}
class OrderList extends React.Component {
  render() {
    const orderNodes = this.props.data.DATA.map((order, i)=>
      <Order
        name={order.item.name.trim()}
        option={order.item.option.trim()}
        price={order.item.price.trim()}
        key={order.id} >
      </Order>
    );
    return(
      <div className="orderList">
        <table>
          <tbody>
            {orderNodes}
          </tbody>
        </table>
      </div>
    )
  }
}
class Output extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.item}</p>
        <p>{this.props.option}</p>
        <p>{this.props.price}</p>
      </div>
    )
  }
}
class OrderForm extends React.Component {
  handleItemChange(e){
    const item   = e.target.value;
    this.props.addItem(item);
  }
  handleOptionChange(e){
    const option = e.target.value;
    this.props.addOption(option);
  }
  handlePriceChange(e){
    const price  = e.target.value;
    this.props.addPrice(price);
  }
  render(){
    return(
      <form action="/#" >
        <input type="text" onChange={this.handleItemChange.bind(this)}/>
        <input type="text" onChange={this.handleOptionChange.bind(this)}/>
        <input type="text" onChange={this.handlePriceChange.bind(this)}/>
        <Output
          item={this.props.item}
          option={this.props.option}
          price={this.props.price}
        />
      </form>
    )
  }
}