import React, { Component } from 'react';
import "./catalog.css";
import Product from "./product";

class Catalog extends Component {
    state = {  }
    render() { 
        return (
            <div className="catalog-page">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        );
    }
}
 
export default Catalog;

/* min info for the product;
-Image
-Title
-Price
-Product Number
-Minimum to sell
-Total Price

*/