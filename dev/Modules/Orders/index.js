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
      data: {DATA}
    }
  }
  render(){
    return(
      <div className="order-container">
        <OrderList data={this.state.data}/>
      </div>
    )
  }
}

class OrderList extends React.Component {
  render() {
    const orderNodes = this.props.data.DATA.map((order, i)=>
      <Order
        name={order.item.name}
        option={order.item.option}
        price={order.item.price}
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
