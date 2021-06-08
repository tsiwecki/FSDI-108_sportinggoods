import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className="home-page">
                    <div className="page-imgs">
                    

                <div className="jumbotron">
                

                    
                    <h1 className="display-4">Hello, thank you for shopping with us! We truely appreciate your continued loyalty!</h1>
                    <p className="lead1">FREE SHIPPING on $50.00 or more when you create an account with us.  CLick on "LEARN MORE" for more information.</p>
                    <Link className="btn btn-primary btn-lg" to="#" role="button">Learn more</Link>

                    <hr className="my-4"></hr>
                    <p className="clear">IN-STORE AND ONLINE CLEARANCE.  Up to 40% off of selected items including outdoor and sports equipment.</p>
                    <Link className="btn btn-info btn-md sale" to="/catalog"  role="button"> Shop sales to find online and store clearance <i className="fa fa-chevron-circle-right" aria-hidden="true"></i></Link>
                    <p className="store"></p>
                        <p className="lead2">
                            
                    </p>

                </div>
                
                    <div className="img1">
                        <img src="../PitBoss.png" alt="Pit Boss BBQ Grill"></img>
                        <h4>Best Bark for your Brisket</h4>
                        <p>Learn how to smoke the perfect brisket</p>
                    </div>

                    <div className="img2">
                    <img src="../yeti1.jpg" alt="Yeti cup and cooler"></img>
                    </div>

                    <div className="img3">
                    <img src="" alt=""></img>
                    </div>

                </div>

            </div>
        );
    }
}

export default Home