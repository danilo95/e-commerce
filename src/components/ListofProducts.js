import React from "react";
import NotFound from "./NotFound";
import { formatNumber } from "../formatFunctions/format";

import Categories from "../components/categories";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import { Link } from "react-router-dom";

class ListOfProducts extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <>
        {this.props.posts.length > 0 ? (
          <div className="products-container">
            <Categories />
            {this.props.posts.map((product, index) => {
              return (
                <div className="card" key={index}>
                  <img
                    className="preview-product-img"
                    src={`https://backendapi.turing.com/images/products/${
                      product.thumbnail
                    }`}
                    alt={`${product.name}`}
                  />
                  <h1>{`${product.name}`}</h1>
                  <p className="price">
                    <span className="previos-price">
                      {product.discounted_price == 0
                        ? " "
                        : formatNumber(product.price)}
                    </span>{" "}
                    {product.discounted_price == 0
                      ? formatNumber(product.price)
                      : formatNumber(product.discounted_price)}
                  </p>
                  <p className="description">{`${product.description}`}</p>
                  <p>
                    <Link to={`/MainProduct/${product.product_id}`}>
                      <button>View</button>
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <NotFound />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(ListOfProducts);
