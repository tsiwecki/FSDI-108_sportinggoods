import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Thadeus",
  };
  
  render() {
    return (
      <div className="qp-page">        
        <button
          onClick={this.decreaseQuantity}
          className="btn btn-primary">
          
          -
        </button>

        <label>{this.state.quantity}</label>       
        
        <button
          onClick={this.increaseQuantity}
          className="btn btn-primary">
          
          +
        </button>

      </div>
    );
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 }); // valid way of changing the state
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
      }
    };
  }


  export default QuantityPicker;
