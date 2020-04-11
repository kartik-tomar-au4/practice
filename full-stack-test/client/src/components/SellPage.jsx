import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { addCategories, addCities } from "../redux/sell-page/sell-page.action";

class SellPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      negotiable: "Yes",
      sellerName: "",
      sellerContactNo: 0,
      category: "",
      city: "",
    };
  }

  componentWillMount() {
    axios.get(`http://localhost:5000/categories`).then((res) => {
      this.props.addCategories(res.data);
    });
    axios.get(`http://localhost:5000/cities`).then((res) => {
      this.props.addCities(res.data);
      console.log(this.props.cities, this.props.categories);
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      negotiable: this.state.negotiable,
      sellerName: this.state.sellerName,
      sellerContactNo: this.state.sellerContactNo,
      category: this.state.category,
      city: this.state.city,
    };
    console.log(newProduct);
    axios
      .post(`http://localhost:5000/product`, newProduct)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <br />
        <h1 className="display-3 ml-5">Enter all the Details</h1>
        <br />
        <form className="col-6 ml-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="FormControlInput1">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="FormControlInput1"
              placeholder="Product Name"
              name="name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="FormControlInput2">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="FormControlInput2"
              name="price"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Negotiable</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="negotiable"
              onChange={this.handleChange}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label for="FormControlInput3">Seller Name</label>
            <input
              type="text"
              className="form-control"
              id="FormControlInput3"
              placeholder="My Name"
              name="sellerName"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="FormControlInput4">Seller Contact Number</label>
            <input
              type="number"
              className="form-control"
              id="FormControlInput4"
              placeholder="1234567890"
              name="sellerContactNo"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Product Category</label>
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              name="category"
              onChange={this.handleChange}
              required
            >
              <option></option>
              {this.props.categories.map((category) => (
                <option key={category.id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect3">City</label>
            <select
              className="form-control"
              id="exampleFormControlSelect3"
              name="city"
              onChange={this.handleChange}
              required
            >
              <option></option>
              {this.props.cities.map((city) => (
                <option key={city.id} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.sellReducer.categories,
  cities: state.sellReducer.cities,
});

const mapDispatchToProps = (dispatch) => ({
  addCategories: (category) => dispatch(addCategories(category)),
  addCities: (city) => dispatch(addCities(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellPage);
