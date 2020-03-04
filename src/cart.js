import React, { Component } from 'react';
import './style.css';
import CartItem from './cartitem';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
        items : [
          {quantity: 1, description: 'item1', id: 1, price: 11.00, lineTotal: 0},
          {quantity: 1, description: 'item2', id: 2, price: 12.00, lineTotal: 0},
          {quantity: 1, description: 'item3', id: 3, price: 13.00, lineTotal: 0},
          {quantity: 1, description: 'item4', id: 4, price: 14.00, lineTotal: 0},
          {quantity: 1, description: 'item5', id: 5, price: 15.00, lineTotal: 0},
          {quantity: 1, description: 'item6', id: 6, price: 16.00, lineTotal: 0}
      ],
      cartTotal : 0,
      cartItemsCount : 0
    }
  }

  onIncrementHandler = (item) => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity++;
    this.setState({items:cloneItems});

    var cartItemsCount = this.state.cartItemsCount + 1;
    this.setState({cartItemsCount: cartItemsCount});

    var total = this.state.cartTotal + (1 * item.price);
    this.setState({cartTotal: total});
  }

  onDecrementHandler = (item) => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity--;
    this.setState({items:cloneItems});

    var cartItemsCount = this.state.cartItemsCount - 1;
    this.setState({cartItemsCount: cartItemsCount});

    var total = this.state.cartTotal - (1 * item.price);
    this.setState({cartTotal: total});
  }

  onResetHandler = () => {
    var cloneItems = [...this.state.items];
     for(var i=0; i<= cloneItems.length-1; i++){
        cloneItems[i].quantity=0;
     }

     this.setState({items:cloneItems});
     this.setState({cartTotal:0});
     this.setState({cartItemsCount:0});
  }

  itemsCount = () => {
    var countItems = this.state.items.reduce((total, item) => (total + item.quantity), 0);
    return countItems;
  }

  cartTotal = () => {
    var total = this.state.items.reduce((total, item) => (total + (item.quantity * item.price)), 0);
    return total;
  }

  componentDidMount = () => {
    var count = this.itemsCount();
    this.setState({cartItemsCount: count});
    var total = this.cartTotal();
    this.setState({cartTotal: total});
  }

  render() {  
    return (
      <div className="cart">  
      <h3>Weclome to Online Shopping</h3>
          <span title="Reset Cart" className="float-right cursor cart-reset" onClick={this.onResetHandler}><button>Reset</button></span>
         
          <div>
            <table>
              <tr>
              &nbsp; &nbsp; <td >Item Name</td> &nbsp; &nbsp;
                <td>Quantity</td> &nbsp; &nbsp;
                <td>Item Price</td> &nbsp; &nbsp;
                <td>Item Total</td> &nbsp; &nbsp;
                <td>Remove</td> &nbsp; &nbsp;
                <td>Add</td> &nbsp;
              </tr>
            </table>
          </div>
          {
            this.state.items.map(item=> 
              <CartItem 
                key={item.id} 
                item={item}
                onIncrement={this.onIncrementHandler}
                onDecrement={this.onDecrementHandler}
              />
            )
          }      

<div className="cart-header">
                <span className="badge badge-pill badge-info">Cart items: {this.state.cartItemsCount}</span>
                <span class="badge badge-pill badge-dark">Cart total: Rs.{this.state.cartTotal}</span>
          </div>   

          <p>By Govoor Saiteja</p>
      </div>
    );
  }
}

export default Cart;