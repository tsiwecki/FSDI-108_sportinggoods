import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/action";
import "./product.css";
import QuantityPicker from "./quantityPicker";

class Product extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="product">
        <img src={"/images/products/" + this.props.data.image} alt="product" />

        <h5>{this.props.data.title}</h5>

        <div className="prices">
          <label className="total-value">Total: ${this.getTotal()}</label>
          <label className="price-value">
            Price: ${this.props.data.price.toFixed(2)}
          </label>
        </div>

        <QuantityPicker
          onQuantityChange={this.handleQuantityChange}
        ></QuantityPicker>

        <button onClick={this.handleAddToCart} className="btn btn-primary info">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
          &nbsp;Add
        </button>
      </div>
    );
  }

  getTotal = () => {
    let total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
  };

  handleAddToCart = () => {
    console.log("Dispatching action");
    let copy = { ...this.props.data };
    copy.quantity = this.state.quantity;
    this.props.addToCart(copy);

    };
}

/**
 * Connect the component to the store (to read/dispatch actions)
 * receives 2 params:
 * 1 - A function that maps what you want to read
 * 2 - An object with the actions you want to dispatch
 */

export default connect(null, { addToCart })(Product);
