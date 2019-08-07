import React from "react";
import { connect } from "react-redux";
import { GetProductsOfCart } from "../actions";
import { formatNumber } from "../formatFunctions/format";
import { Link } from "react-router-dom";
import "./css/cart.css";
class Cart extends React.Component {
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
        <div className="cart">
          <div id="order-table">
            <table cellSpacing="2" cellPadding="3" width="100%" border="0">
              <thead>
                <tr className="order-head">
                  <th className="order-item-nom" width="1%">
                    ID
                  </th>
                  <th className="order-head-img">image</th>
                  <th className="order-head-name">Description</th>
                  <th className="order-head-cnt" width="1%">
                    quantity
                  </th>
                  <th className="order-head-sum" width="1%">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartList.map((cartItem, index) => {
                  return (
                    <tr id="order-item-2274" className="order-item">
                      <td className="order-item-nom">{cartItem.item_id}</td>
                      <td className="order-item-img" align="center" width="1%">
                        <img
                          className="ulightbox"
                          src={`https://backendapi.turing.com/images/products/${
                            cartItem.image
                          }`}
                        />
                      </td>
                      <td className="order-item-name">
                        <Link
                          to={`/MainProduct/${cartItem.product_id}`}
                          target="_blank"
                        >
                          <span className="title_product">{cartItem.name}</span>
                        </Link>
                      </td>
                      <td width="1%" className="order-item-cnt" align="center">
                        {cartItem.quantity}
                      </td>
                      <td width="1%" className="order-item-sum">
                        {formatNumber(cartItem.subtotal)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.cart.cart
  };
};

export default connect(
  mapStateToProps,
  { GetProductsOfCart }
)(Cart);
