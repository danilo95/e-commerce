import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetProductsOfCart } from "../actions";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.cartId = JSON.parse(localStorage.getItem("cart"));
  }
  componentDidMount() {
    this.props.GetProductsOfCart(this.cartId);
  }
  render() {
    return (
      <>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/CartPage">
            {" "}
            <span className="badge">{this.props.items}</span>
            <i className="fas fa-shopping-cart" />
            Cart
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.items
  };
};

export default connect(
  mapStateToProps,
  { GetProductsOfCart }
)(NavBar);
