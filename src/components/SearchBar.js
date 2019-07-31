import React from "react";
import { connect } from "react-redux";
import { SearchItem, fetchPost } from "../actions"; //this is the action for SEARCH the products

class SeachBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (!event.target.value) {
      this.setState({ value: event.target.value });
      return this.props.fetchPost();
    }
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    this.props.SearchItem();
  }

  searchHandler() {
    this.props.SearchItem(this.state.value);
  }

  render() {
    return (
      <>
        <div className="searhcontainer" id="searhcontainer">
          <input
            type="text"
            placeholder="search"
            className="searchbar"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="btn btn-default" onClick={() => this.searchHandler()}>
            {" "}
            <i className="fas fa-search"> </i>
            Search{" "}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { search: state.search };
};

export default connect(
  mapStateToProps,
  { SearchItem, fetchPost }
)(SeachBar);
