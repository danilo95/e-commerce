import React from "react";
import { connect } from "react-redux";
import { productDetail } from "../api/Request";
import Review from "../components/Review";
import { async } from "q";
class Page3 extends React.Component {
  state = {
    singlePost: [],
    reivew: []
  }
  componentDidMount(){
   let response = productDetail(this.props.match.params.id)
  response.then(data => {
    this.setState({ singlePost: data[0].data });
    this.setState({ reivew: data[1].data });
   })
  }

  render() {
    return ( 
      <>
    {this.state.singlePost.map((product,index) => { 
    return (
      <div className="page3" key={index}>
        
        <div className="product-details section">
          <div class="img-container">
          <img src={`https://backendapi.turing.com/images/products/${product.image}`}></img>
          </div>
          <h1 className="title">{product.name}</h1>

          <div className="price-ratting section">
            <span className="price float-left">
              <span className="new">$ {product.discounted_price==0?product.price:product.discounted_price}</span>
              <span className="old">$ {product.discounted_price==0?" ":product.price}</span>
            </span>

            <span className="ratting float-right">
              
              <span> ({this.state.reivew.length} Customer Review)</span>
            </span>
          </div>

          <div className="short-desc section">
            <h5 className="pd-sub-title">Description</h5>
            <p>
            {product.description}
            </p>
          </div>
          <h5 className="pd-sub-title">Reviews</h5>
        
        </div>
        <Review   reivew={this.state.reivew}/>
   

      </div>
    );
    })}
    </>
  )
  }

}

export default Page3;
