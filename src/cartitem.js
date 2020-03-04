import React, { Component } from 'react';
import './style.css';

class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="alert alert-info">
        <table>
          <tr>
          &nbsp; &nbsp;   <td> <span >{this.props.item.description}</span></td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       <td>  <button>{this.props.item.quantity}</button></td> &nbsp; 
       <td>  <span >X</span></td> &nbsp;
       <td>  <button  >Rs.{this.props.item.price}</button> </td> &nbsp; 
       <td>  <span >=</span> </td> &nbsp; &nbsp;
       <td>  <button >Rs.{this.props.item.price * this.props.item.quantity}</button></td> &nbsp; &nbsp;
       &nbsp; &nbsp;
       <td>  <button  disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}  >-</button></td> &nbsp; &nbsp;
       &nbsp; &nbsp;
       <td>  <button onClick={()=> this.props.onIncrement(this.props.item)} >+</button></td> &nbsp; &nbsp;
        
         </tr>
        </table>
       
        
      </div>
    );
  }
}

export default CartItem;