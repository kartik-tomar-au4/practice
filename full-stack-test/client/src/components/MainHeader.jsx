import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top display">
          <Link className="navbar-brand" to="/">
            <h2>Buy N Sell</h2>
          </Link>
          <div className="navbar-nav  ml-auto">
            <ul className="navbar-nav mr-5">
              <li className="nav-item">
                <Link className="nav-link mr-4" to="/buy">
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">
                  Sell
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainHeader;
