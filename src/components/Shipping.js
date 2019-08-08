import React from "react";
import { connect } from "react-redux";
import {getShipping,getShippingPrices} from "../actions";

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: " "};
  }

  componentDidMount() {
    this.props.getShipping();
  }

  handleChange=(event)=> {
    if (event.target.value === "1") {
      this.setState({ message: "Please select a shipping region to buy" })
      this.props.getShippingPrices(1);
    }else{
      this.setState({ message: "" })
      this.props.getShippingPrices(event.target.value);
    }
  }

  render() {
    return (
      <>
      <div className="categories">
        shipping region:
        <select name="select" onChange={this.handleChange}>
          {this.props.shipping.map((value, index) => {
            return (
              <option key={index} value={value.shipping_region_id}>
                {value.shipping_region}
              </option>
            );
          })}
        </select>
        <p>{this.state.message}</p>
      </div>

      <div className="categories">
        shipping Prices:
        <select name="select">
          {this.props.prices.map((value, index) => {
            return (
              <option key={index} value={value.shipping_cost}>
                {value.shipping_type}
              </option>
            );
          })}
        </select>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    shipping: state.shipping.shipping,
    prices: state.shipping.prices
  };
};

export default connect(
  mapStateToProps,
  { getShipping,getShippingPrices}
)(Shipping);