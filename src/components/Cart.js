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
import Modal from "../components/modal";
import "./css/cart.css";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.cartId = JSON.parse(localStorage.getItem("cart"));
    this.state = {
      alert:
        "The cart is empty, buy a awesome t shirt before you left the site :) ",
      tax: 0.06,
      showModal: false
    };
  }
  componentDidMount() {
    this.props.GetProductsOfCart(this.cartId);
    this.props.GetTotal(this.cartId);
  }
  handlerModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  deleteItem = e => {
    this.props.DeleteItemCart(e.target.dataset.id);
  };

  clearCart = () => {
    this.props.ClearActualCart(this.cartId);
  };

  conditionalRender() {
    if (this.props.cartList.length > 0) {
      return (
        <>
          <div className="cart">
            <button className="clear_btn" onClick={this.clearCart}>
              Clear Cart
            </button>
            <button className="clear_btn" onClick={this.handlerModal}>
              Order now!!
            </button>
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
                    <th className="order-item-nom">ID</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>quantity</th>
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
                        <td data-label="ID" align="center">
                          {cartItem.item_id}
                        </td>
                        <td data-label="Image" align="center" width="1%">
                          <img
                            alt={cartItem.image}
                            className="ulightbox"
                            src={`https://backendapi.turing.com/images/products/${
                              cartItem.image
                            }`}
                          />
                        </td>
                        <td data-label="Name" align="center">
                          <Link
                            to={`/MainProduct/${cartItem.product_id}`}
                            target="_blank"
                          >
                            <span className="title_product">
                              {cartItem.name}
                            </span>
                          </Link>
                        </td>
                        <td align="center" data-label="Quantity">
                          {cartItem.quantity}
                        </td>
                        <td align="center" data-label="Subtotal">
                          {formatNumber(cartItem.subtotal)}
                        </td>
                        <td align="center" data-label="Delete">
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
                    <td>
                      {formatNumber(
                        parseFloat(this.props.total) *
                          parseFloat(this.state.tax)
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colSpan="5">
                      <strong>Subtotal:</strong>
                    </td>
                    <td>{formatNumber(this.props.total)}</td>
                  </tr>
                  <tr>
                    <td align="center" colSpan="5">
                      <strong>Total:</strong>
                    </td>
                    <td>
                      {formatNumber(
                        parseFloat(this.props.total) *
                          parseFloat(this.state.tax) +
                          parseFloat(this.props.total)
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {this.state.showModal ? (
            <Modal
              title="Success!"
              content="Your Buy was completed"
              onDismiss={() => this.closeModal}
            />
          ) : null}
          }
        </>
      );
    } else {
      return (
        <div className="cart">
          <h2>{this.state.alert}</h2>
        </div>
      );
    }
  }

  render() {
    return this.conditionalRender();
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.cart.cart,
    total: state.cart.total
  };
};

export default connect(
  mapStateToProps,
  { GetProductsOfCart, GetTotal, DeleteItemCart, ClearActualCart }
)(Cart);
