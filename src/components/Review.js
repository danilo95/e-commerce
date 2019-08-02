import React from "react";
import { connect } from "react-redux";
import { getReviewslById } from "../actions";
class Review extends React.Component {
  componentDidMount() {
    this.props.getReviewslById(this.props.id);
  }
  render() {
    return (
      <>
        {this.props.review.map((reivews, index) => {
          return (
            <div className="comments-container" key={index}>
              <ul id="comments-list" className="comments-list">
                <li>
                  <div className="comment-main-level">
                    <div className="comment-box">
                      <div className="comment-head">
                        <h6 className="comment-name by-author">
                          {reivews.name}
                        </h6>
                        <span>
                          Posted on:{" "}
                          {new Date(reivews.created_on).toDateString()}
                        </span>
                        <i className="fa fa-reply" />
                        <i className="fa fa-heart" />
                      </div>
                      <div className="comment-content">
                        {reivews.review}
                        <span className="ratting float-right">
                          <br />
                          {reivews.rating === 1 ? (
                            <i className="fas fa-star" />
                          ) : reivews.rating === 2 ? (
                            <>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </>
                          ) : reivews.rating === 3 ? (
                            <>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </>
                          ) : reivews.rating === 4 ? (
                            <>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </>
                          ) : (
                            <>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </>
                          )}
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

const mapStateToProps = state => {
  return {
    review: state.review.review
  };
};

export default connect(
  mapStateToProps,
  { getReviewslById }
)(Review);
