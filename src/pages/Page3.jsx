import React from "react";
import { connect } from "react-redux";
import Review from "../components/Review";
import { singleProductDetail } from '../actions'; //this is the action for SEARCHBYID the products
import { getReviewslById } from '../actions'; //this is the action for SEARCHBYID the products
import { async } from "q";
class Page3 extends React.Component {
  
  componentDidMount(){
  
  this.props.singleProductDetail(this.props.match.params.id)

 console.log(  this.props.getReviewslById(this.props.match.params.id))
  }

  render() {
    return ( 
      <>
      {this.props.singlePost.map((product,index) => { 
      return ( 
        <div className="page3" key={index}>
          
          <div className="product-details section">
            <div className="img-container">
            <img src={`https://backendapi.turing.com/images/products/${product.image}`}></img>
            </div>
            <h1 className="title">{product.name}</h1>
  
            <div className="price-ratting section">
              <span className="price float-left">
                <span className="new">$ {product.discounted_price==0?product.price:product.discounted_price}</span>
                <span className="old">$ {product.discounted_price==0?" ":product.price}</span>
              </span>
  
              <span className="ratting float-right">
                
                <span> ( Customer Review)</span>
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
          
     
  
        </div>
      );
      })}
      </>
  )
  }

}

const mapStateToProps =state=>{
  return {
    singlePost: state.singlePost.singlePost
    };
}

export default connect(mapStateToProps,{singleProductDetail,getReviewslById})(Page3);