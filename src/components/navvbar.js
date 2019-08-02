import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="#">
            {" "}
            <i className="fas fa-shopping-cart" />Cart
          </Link>
        </div>
      </>
    );
  }
}

export default NavBar;
