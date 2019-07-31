import React from "react";
import NotFound from './NotFound';
import Categories from '../components/categories';
import { connect } from 'react-redux'; 
import { fetchPost } from '../actions'; //this is the action for all the products
import { Link } from 'react-router-dom';

import NetworkError from './NetworkError';

class ListOfProducts extends React.Component {

  componentDidMount(){
    this.props.fetchPost();
  }

  formatNumber(numberValue){
   let numberToReturn = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(numberValue);
    return  numberToReturn;
  }

  render(){ 
    return ( 
      <>
      {this.props.posts.length > 0?
      <div className="products-container">
        <Categories/>
        {this.props.posts.map((product, index) => { 

          return (
            
            <div className="card"  key={index}>
            <img  className="preview-product-img" src={`https://backendapi.turing.com/images/products/${product.thumbnail}`} alt={`${product.name}`}/>
            <h1>{`${product.name}`}</h1>
            <p className="price"><span className="previos-price">{product.discounted_price==0?" ":this.formatNumber(product.price)}</span> {product.discounted_price==0?this.formatNumber(product.price):this.formatNumber(product.discounted_price)}</p>
            <p className="description">{`${product.description}`}</p>
            <p ><Link to={`/page3/${product.product_id}`}><button >View</button></Link></p>
          </div>
          
          );
        })}
        </div>
        :<NotFound/>}
      </>
    );
  }
}

const mapStateToProps =state=>{
  return {
    posts: state.posts.posts
    };
}

export default connect(mapStateToProps,{fetchPost})(ListOfProducts);