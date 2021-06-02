import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

class Product extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img
            src={"/images/products/" + this.props.data.image}
            alt="product"
          ></img>

          <h5 classNamne="title">{this.props.data.title}</h5>
          <label className="price">{this.props.data.price}</label>
          <QuantityPicker></QuantityPicker>

          <button className="btn btn-sm btn-info">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
