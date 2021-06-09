import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="page-imgs">
          <div className="jumbotron">
            <h1 className="display-4">
              Hello, thank you for shopping with us! We truely appreciate your
              continued loyalty!
            </h1>
            <p className="lead1">
              FREE SHIPPING on $50.00 or more when you create an account with
              us. CLick on "LEARN MORE" for more information.
            </p>

            <div className="container">
              <div className="more">
                <Link
                  className="btn btn-primary btn-lg"
                  to="/learnMore"
                  role="button"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <hr className="my-4"></hr>
            <p className="clear">
              IN-STORE AND ONLINE CLEARANCE. Up to 40% off of selected items
              including outdoor and sports equipment.
            </p>

            <div className="sale-container">
              <div className="shop-sale">
                <Link
                  className="btn btn-info btn-lg sale"
                  to="/catalog"
                  role="button"
                >
                  {" "}
                  Shop sales to find online and store clearance{" "}
                  <i
                    className="fa fa-chevron-circle-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </div>

            <div>
              <p className="store"></p>
              <p className="lead2"></p>
            </div>

            <div className="display-5">
              <div className="img1">
                <img
                  src="../PitBoss.png"
                  width="500"
                  height="auto"
                  alt="Pit Boss BBQ Grill"
                ></img>
              </div>
              <div className="box2">
                <h1>Best Bark for your Brisket</h1>
                <h3>Learn how to smoke the perfect brisket</h3>
              </div>
            </div>

            <div className="display-6">
              <div className="box3">
                <h1>YETI'S</h1>
                <h3>-YETI's make great gifts</h3>
                <h3>-Are great for camping</h3>
                <h3>-Get your coolers, cups,</h3>
                <h3> can insulator, mugs,</h3>
                <h3>Hopper, Hopper cooler,</h3>
                <h3>and more......</h3>
              </div>

              <div className="img2">
                <img
                  src="yeti1.jpg"
                  width="900"
                  height="auto"
                  alt="Yeti cup and cooler"
                ></img>
              </div>
            </div>

            <div className="display-7">
              <div className="img3">
                <img src="" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
