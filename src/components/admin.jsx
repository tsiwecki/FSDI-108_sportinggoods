import React, { Component } from "react";
import ProductService from "../services/productService";
import "./admin.css";


class Admin extends Component {
    state = {};
    render() {
        return (
            <div className="admin-page px-4 py-5">
                <div className="btn-group">
                    <button onClick={this.testRead} className="btn btn-info">
                        Test Read
        </button>
                    <button onClick={this.sendData} className="btn btn-warning">
                        Send Data
        </button>
                    <button onClick={this.clearData} className="btn btn-danger">
                        Clear Data
        </button>
                </div>
            </div>
        );
    }

    // get the catalog from the service
    // console log it
    testRead = async () => {
        let service = new ProductService();
        let data = await service.getCatalog();
        console.log("Test read:", data);
    };

    sendData = async () => {
        console.log("Send Data");

        let service = new ProductService();
        await service.seedData();
        console.log("Data seeded, try reading it to confirm");
    };

    clearData = () => {
        console.log("Clear Data");
    };
}


export default Admin;
