import React from "react";

class Review extends React.Component {

  render() {
    return (
      <>
        {this.props.reivew.map((reivews, index) => {
          return (
                 
   
	<div class="comments-container">
  <ul id="comments-list" class="comments-list">
    <li>
      <div class="comment-main-level">
        <div class="comment-box">
          <div class="comment-head">
            <h6 class="comment-name by-author"><a>{reivews.name}</a></h6>
            <span>Posted on: {reivews.created_on}</span>
            <i class="fa fa-reply"></i>
            <i class="fa fa-heart"></i>
          </div>
          <div class="comment-content">
          {reivews.review}
          <span className="ratting float-right">
            <br></br>
           
            <i className="fa fa-star active" />
              <i className="fa fa-star active" />
              <i className="fa fa-star active" />
              <i className="fa fa-star active" />
              <i className="fa fa-star active" />
              </span>
          </div>
        </div>
      </div>
      </li>
      </ul>
</div>   
     
          );
        })}
      </>
    );
  }
}

export default Review;
