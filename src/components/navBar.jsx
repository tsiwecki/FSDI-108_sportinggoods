import React, { Component } from 'react';
import './navBar.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class NavBar extends Component {
  state = {};
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Siwecki's Sporting Goods</div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
              </li>
            </ul>
              
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider"></hr></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
               
                <div className="d-flex">
                <Link className="btn btn-outline-primary" to="/cart">
                  <i className="fa fa-cart-plus mr-2"></i>
                  View Cart
                <span className="badge badge-secondary">{this.props.cartCount}</span>
                </Link>

              </div>
              
            
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-search" type="submit">Search</button>
            </form>

            </div>
        </div>
      </nav>
    );
  };
}

// return an object mapping the sstate to props
const mapStateToProps = (state) => {
  return {
    cartCount: state.length  // <--- will put the array in this.prop.cart
  }
};

export default connect( mapStateToProps ,null)(NavBar);
