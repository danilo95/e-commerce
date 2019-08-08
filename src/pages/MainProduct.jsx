import React from "react";
import { connect } from "react-redux";
import Review from "../components/Review";
import { singleProductDetail,addNewProductToTheCart } from "../actions";
import { formatNumber } from "../formatFunctions/format";

class MainProduct extends React.Component {

  constructor(props) {
    super(props);
    this.cartId=JSON.parse(localStorage.getItem("cart"))
    this.state = {
      id : this.props.match.params.id
  }
  }

  componentDidMount() {
    this.props.singleProductDetail(this.state.id);
    document.getElementById("searhcontainer").style.display = "none";
  }
  AddProductHandler=()=>
  {
    this.props.addNewProductToTheCart(this.cartId,this.state.id,1)
  }

  render() {
    return (
      <>
        {this.props.singlePost.map((product, index) => {
          return (
            <div className="MainProduct" key={index}>
              <div className="product-details section">
                <div className="img-container">
                  <img
                    src={`https://backendapi.turing.com/images/products/${
                      product.image
                    }`}
                    alt={product.image}
                  />
                </div>
                <h1 className="title">{product.name}</h1>

                <div className="price-ratting section">
                  <span className="price float-left">
                    <span className="new">
                      {" "}
                      {product.discounted_price === "0.00"
                        ? formatNumber(product.price)
                        : formatNumber(product.discounted_price)}
                    </span>
                    <span className="old">
                      {product.discounted_price === "0.00"
                        ? " "
                        : formatNumber(product.price)}
                    </span>
                  </span>
                  <button className="btn-cart" onClick={this.AddProductHandler}>
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <div>{this.props.message}</div>
                </div>

                <div className="short-desc section">
                  <h5 className="pd-sub-title">Description</h5>
                  <p>{product.description}</p>
                </div>
                <h5 className="pd-sub-title">Reviews</h5>
              </div>
              <Review id={this.props.match.params.id} />
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    singlePost: state.singlePost.singlePost,
    message: state.cart.message,
  };
};

export default connect(
  mapStateToProps,
  { singleProductDetail,addNewProductToTheCart }
)(MainProduct);
