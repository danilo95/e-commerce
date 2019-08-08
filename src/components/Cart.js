import React from "react";
import { connect } from "react-redux";
import {
  GetProductsOfCart,
  GetTotal,
  DeleteItemCart,
  ClearActualCart
} from "../actions";
import { formatNumber } from "../formatFunctions/format";
import { Link } from "react-router-dom";
import "./css/cart.css";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.cartId = JSON.parse(localStorage.getItem("cart"));
    this.state = {alert: " "};
  }
  componentDidMount() {
    this.props.GetProductsOfCart(this.cartId)
    this.props.GetTotal(this.cartId);
  }
  deleteItem = e => {
    this.props.DeleteItemCart(e.target.dataset.id);
  };

  clearCart = () => {
    this.props.ClearActualCart(this.cartId).then(
      this.setState({alert: "The cart is empty, buy a awesome t shirt before you left the site :)"})
    )
  };
  render() {
    return (
      <>
        <div className="cart">
          <button className="clear_btn" onClick={this.clearCart}>
            Clear Cart
          </button>
         <h2>{this.state.alert}</h2>
          <hr />
          <div>
            <table
              cellSpacing="2"
              cellPadding="3"
              width="100%"
              border="0"
              align="center"
            >
              <thead>
                <tr>
                  <th className="order-item-nom" width="1%">
                    ID
                  </th>
                  <th>image</th>
                  <th>Name</th>
                  <th width="1%">quantity</th>
                  <th className="order-head-sum" width="1%">
                    Subtotal
                  </th>
                  <th className="order-head-sum" width="1%">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartList.map((cartItem, index) => { 
                  return (
                    <tr key={index}>
                      <td align="center" >{cartItem.item_id}</td>
                      <td align="center" width="1%">
                        <img
                          alt={cartItem.image}
                          className="ulightbox"
                          src={`https://backendapi.turing.com/images/products/${
                            cartItem.image
                          }`}
                        />
                      </td>
                      <td align="center" width="1%">
                        <Link
                          to={`/MainProduct/${cartItem.product_id}`}
                          target="_blank"
                        >
                          <span className="title_product">{cartItem.name}</span>
                        </Link>
                      </td>
                      <td width="1%" align="center">
                        {cartItem.quantity}
                      </td>
                      <td width="1%" align="center">
                        {formatNumber(cartItem.subtotal)}
                      </td>
                      <td align="center">
                        <span>
                          <i
                            onClick={this.deleteItem}
                            data-id={cartItem.item_id}
                            className="fa fa-trash fa-5  faa-pulse animated-hover"
                            aria-hidden="true"
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td align="center" colSpan="5">
                    <strong>Taxes:</strong>
                  </td>
                  <td>{formatNumber(this.props.tax)}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="5">
                    <strong>Total:</strong>
                  </td>
                  <td>{formatNumber(this.props.total)
                  }</td>
                </tr>
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
    cartList: state.cart.cart,
    total: state.cart.total,
    tax: state.cart.tax,
  };
};

export default connect(
  mapStateToProps,
  { GetProductsOfCart, GetTotal, DeleteItemCart, ClearActualCart }
)(Cart);
