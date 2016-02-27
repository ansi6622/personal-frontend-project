import React from 'react';

class Order extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.item}</td>
        <td>$1</td>
      </tr>
    )
  }
}

export default class Orders extends React.Component {
  handleChange(e){
    const item = e.target.value;
    this.props.changeItem(item);
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange.bind(this)}/>
        <OrderList item={this.props.item}/>
      </div>
    )
  }
}

class OrderList extends React.Component {
  render(){
  const Array = ['1', '2', '3', '4']
    .map((i) =><Order key={i} item={this.props.item}/>);
    return(
      <table>
        <tbody>
          {Array}
        </tbody>
      </table>
    )
  }
}