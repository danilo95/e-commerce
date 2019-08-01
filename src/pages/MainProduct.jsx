import React from "react";
import { connect } from "react-redux";
import Review from "../components/Review";
import { singleProductDetail } from "../actions";
import { formatNumber } from "../formatFunctions/format";

class Page3 extends React.Component {
  componentDidMount() {
    this.props.singleProductDetail(this.props.match.params.id);
    document.getElementById("searhcontainer").style.display = "none";
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
                      {product.discounted_price == 0
                        ? formatNumber(product.price)
                        : formatNumber(product.discounted_price)}
                    </span>
                    <span className="old">
                      {product.discounted_price == 0
                        ? " "
                        : formatNumber(product.price)}
                    </span>
                  </span>
                  <button className="btn-cart">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
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
    singlePost: state.singlePost.singlePost
  };
};

export default connect(
  mapStateToProps,
  { singleProductDetail }
)(Page3);
