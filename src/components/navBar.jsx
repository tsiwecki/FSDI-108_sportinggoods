import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
  state = {};
  render() {
    return (

      <nav className="navbar navbar-expand-lg navBar-page ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Siwecki's Sporting Goods</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mp-2 mb-lg-0">
            <li className="nav-item">
              <a className="navBar-link active" aria-current="page" href="/#">Home</a>
            </li>
           
            <li className="nav-item">
              <a className="navBar-link" href="?#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="navBar-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
             </a>
            </li>
          </ul>
      
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
                    
            <li className="nav-item">
              <a className="navBar-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="" aria-label="Search"></input>
            <button className="btn btn-outline-search" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  };
}

export default NavBar;
