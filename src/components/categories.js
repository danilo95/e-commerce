import React from "react";
import { connect } from "react-redux";
import { searchProductByCategorie, categorieList, fetchPost } from "../actions";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  showSearchBar = () => {
    let flag = document.getElementById("searhcontainer");
    if (flag.style.display === "none") {
      flag.style.display = "flex";
    } else {
      flag.style.display = "none";
    }
  };

  handleChange(event) {
    if (event.target.value === "0") {
      return this.props.fetchPost();
    }
    this.props.searchProductByCategorie(event.target.value);
  }
  componentDidMount() {
    this.props.categorieList();
  }

  render() {
    return (
      <div className="categories">
        Search By Category:
        <select name="select" onChange={this.handleChange}>
          <option value="0">All Products</option>
          {this.props.category.map((value, index) => {
            return (
              <option key={index} value={value.category_id}>
                {value.name}
              </option>
            );
          })}
        </select>
        <button className="absolutebutton" onClick={this.showSearchBar}>
          <i className="fas fa-search"> </i>Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category.category
  };
};

export default connect(
  mapStateToProps,
  { categorieList, searchProductByCategorie, fetchPost }
)(Categories);
