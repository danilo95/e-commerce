import React from "react";
let problem;
const NotFound = props => {
  if (props.status.length === 0 && !props.loading) {
    problem = "NO MATCH FOUND";
  } else if (props.loading) {
    problem =<><i class="fa fa-spinner fa-spin" ></i> "Im loading....."</>;
  } else {
    switch (props.status) {
      case 500:
        problem = "INTERNAL SERVER ERROR";
        break;
      case 404:
        problem = "404-Data Not FOUND";
        break;
      default:
        problem = "Sorry something goes wrong try later.....";
        break;
    }
  }

  return (
    <div className="not-found">
      <div>
        <h2>{problem}</h2>
      </div>
    </div>
  );
};

export default NotFound;
