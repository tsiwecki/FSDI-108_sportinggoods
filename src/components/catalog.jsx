import React, { Component } from "react";
import Product from "./product";
import "./catalog.css";

import ProductService from "../services/productService";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    let prodsToDisplay = this.state.products;

    if (this.state.selectedCategory) {
      prodsToDisplay = prodsToDisplay.filter(
        (prod) => prod.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <div>
          There are: {this.state.products.length} Products in the catalog
        </div>

        <div className="categories">
          <button
            onClick={() => this.selectCategory("")}
            className="btn btn-info ml-1"
          >
            Show All
          </button>

          {this.state.categories.map((cat) => (
            <button
              onClick={() => this.selectCategory(cat)}
              className="btn btn-info ml-2"
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products mt-3">
          {prodsToDisplay.map((prod) => (
            <Product key={prod.id} data={prod}></Product>
          ))}
        </div>
      </div>
    );
  }

  selectCategory = (cat) => {
    console.log("User selected a cat.", cat);
    this.setState({ selectedCategory: cat });
  };

  // when the component is mounted (rendered on screen)
  componentDidMount() {
    // good place to load data from server

    let service = new ProductService();
    let data = service.getCatalog();

    var cats = [];
    for (let i = 0; i < data.length; i++) {
      var category = data[i].category;
      if (!cats.includes(category)) {
        // if the category does bot exist inside the solution array
        cats.push(category); // add it
      }
    }
    console.log(data, cats);
    //put data on state
    this.setState({ products: data, categories: cats });
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
