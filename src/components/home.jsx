import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="jumbotron">
                    <h1 className="display-4">Hello, thank you for shopping with us! We truely appreciate your continued loyalty!</h1>
                    <p className="lead1">FREE SHIPPING on $50.00 or more when you create an account with us.  CLick on "LEARN MORE" for more information.</p>
                    <Link className="btn btn-primary btn-lg" to="#" role="button">Learn more</Link>

                            <hr className="my-4"></hr>
                    <p className="clear">IN-STORE AND ONLINE CLEARANCE.  Up to 40% off of selected items including outdoor and sports equipment.</p>
                    <p className="store"></p>
                        <p className="lead2">
                            
                    </p>
                </div>

            </div>
        );
    }
}

export default Home