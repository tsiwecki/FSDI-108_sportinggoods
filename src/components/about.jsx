import React, { Component } from "react";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="camping">
          <img src="../camping.jpg" alt="family camping"></img>
        </div>

        <div className="text">
          <h1>About us</h1>
        </div>

        
        <div className="jumbotron">
          <h1 className="display-4">Company Overview</h1>
          <p className="lead">
            Siwecki's Sporting Goods is one of the nation's leading sporting
            goods and outdoor stores. With 199 stores and counting, we offer a
            broad assortment of quality hunting, fishing, and camping equipment
            and gear, </p>
            <p>along with sports and leisure products, footwear, apparel
            and much more.
          </p>
          <hr className="my-4"></hr>
          <p>
            Siwecki's Sporting Goods is headquartered out of Pontiac, Illinois,
            about 45 minutes north of Bloominton, Illinois.
          </p>
          <p>
            Over the last several decades, the company has grown substantially
            from its small beginnings. Sales reached one billion dollars in
            2005, two billion dollars in 2009, three billion dollars in 2015,
            and four billion dollars in 2019. In fiscal 2020, sales exceeded
            $5.69 billion.
          </p>
          <p>
            All this was accomplished through the help of our customers. As a
            show of appreciation, we invest in the communities where our stores
            are located.
          </p>
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="#" role="button">
              Learn more
            </Link>
                </p>
                
            
        </div>
      </div>
    );
  }
}

export default About;
