import React from "react";
import { connect } from 'react-redux'; 
import { categorieList } from '../actions'; //this is the action for get the categories
import { searchProductByCategorie } from '../actions'; //this is the action for SEARCHBYID the products
class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
     }

     handleChange(event) {
      console.log(event.target.value);
      this.props.searchProductByCategorie(event.target.value);
      }
  componentDidMount(){
    this.props.categorieList();
    this.props.searchProductByCategorie();
  }

  render() { 
    return (
    
   <div className="categories">Categories: 
   <select name="select" onChange={this.handleChange}>
   { this.props.category.map((value,index) => { 
      return (
      <option key={index} value={value.category_id}>{value.name}</option> );  }) }
  </select>
  
 </div>
    );
  }
}

const mapStateToProps =state=>{
  return {
    category: state.category.category
    };
}

export default connect(mapStateToProps,{categorieList,searchProductByCategorie})(Categories);