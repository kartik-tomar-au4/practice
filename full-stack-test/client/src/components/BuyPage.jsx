import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { addProducts } from "../redux/products/products.action";

class BuyPage extends Component {
  componentWillMount() {
    axios.get(`http://localhost:5000/product`).then((res) => {
      console.log(res.data);
      this.props.addProducts(res.data);
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <h1 className="display-3 ml-5">Available Products</h1>
        <br />
        {this.props.products.map((product) => (
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <table class="table md-5">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td>Negotiable</td>
                      <td>{product.negotiable}</td>
                    </tr>
                    <tr>
                      <td>Seller Name</td>
                      <td>{product.seller_name}</td>
                    </tr>
                    <tr>
                      <td>Seller Contact</td>
                      <td>{product.seller_contact_no}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>{product.category}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{product.city}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProducts: (product) => dispatch(addProducts(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);
