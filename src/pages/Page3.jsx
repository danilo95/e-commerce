import React from 'react';
import { productById } from '../api/Request';

class Page3 extends React.Component { 

render(){
  const singlePost =productById(this.props.match.params.id);

  return (
    <div className="page3" style={{backgroundColor: 'white'}}>
      <h1>Page 3</h1>
      <div className="product-details section">
                   
                    <h1 className="title"></h1>
                  
                    <div className="price-ratting section">
                      
                        <span className="price float-left"><span className="new">€ 120.00</span></span>
                      
                        <span className="ratting float-right">
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <span> (01 Customer Review)</span>
                        </span>
                    </div>
                 
                    <div className="short-desc section">
                        <h5 className="pd-sub-title">Quick Overview</h5>
                        <p>There are many variations of passages of Lorem Ipsum avaable, b majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. make an ami jani na.</p>
                    </div>
                   
                    
                    
                   
                    
              
                </div>
    </div>
  );
}
}

export default Page3;
