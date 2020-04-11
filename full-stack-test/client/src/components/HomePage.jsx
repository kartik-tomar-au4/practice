import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Buy All Kind of Products</h5>
                  <Link to="/buy" className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Sell All Kind of Products</h5>
                  <Link to="/sell" className="btn btn-primary">
                    Sell Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
