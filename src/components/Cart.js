import React from "react";
import { connect } from "react-redux";
import { GetProductsOfCart,GetTotal } from "../actions";
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
    this.props.GetTotal(this.cartId);
  }

  render() {
    return ( 
      <>
        <div className="cart">
          <h1>total: {formatNumber(this.props.total)}</h1><hr></hr>
          <div >
            <table cellSpacing="2" cellPadding="3" width="100%" border="0" align="center">
              <thead>
                <tr >
                  <th className="order-item-nom" width="1%">
                    ID
                  </th>
                  <th >image</th>
                  <th >Name</th>
                  <th  width="1%">
                    quantity
                  </th>
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
                    <tr >
                      <td align="center">{cartItem.item_id}</td>
                      <td  align="center" width="1%">
                        <img
                          className="ulightbox" atl={
                            cartItem.image
                          }
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
                      <td width="1%"  align="center">
                        {cartItem.quantity}
                      </td>
                      <td width="1%" align="center">
                        {formatNumber(cartItem.subtotal)}
                      </td>
                      <td align="center"><i class="fa fa-trash fa-5  faa-pulse animated-hover" aria-hidden="true"></i></td>
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
    cartList: state.cart.cart,
    total: state.cart.total
  };
};

export default connect(
  mapStateToProps,
  { GetProductsOfCart,GetTotal }
)(Cart);
