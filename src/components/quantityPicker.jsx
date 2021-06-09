import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="qnty-page">
        <div className="btn-group">
          <button
            onClick={this.decreaseQuantity}
            className="btn btn-primary minus"
          >
            -
          </button>

          <label className="qnt">{this.state.quantity}</label>

          <button
            onClick={this.increaseQuantity}
            className="btn btn-primary add"
          >
            +
          </button>

          <button className="btn btn-primary info">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            Add
          </button>
        </div>
      </div>
    );
  }
  
  increaseQuantity = () => {
    let qnty = this.state.quantity + 1;
    this.setState({ quantity: qnty }); // valid way of changing the state

    this.props.onQuanityChange(qnty);
  };

  decreaseQuantity = () => {
    var qnty = this.state.quantity - 1;
    if (qnty > 0) {
      this.setState({ quantity: qnty });

      this.props.OnQuantityChange(qnty);
    }
  };
}

export default QuantityPicker;
