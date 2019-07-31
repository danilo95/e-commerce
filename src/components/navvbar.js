import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{

showSearchBar =() =>{
  let flag = document.getElementById("searhcontainer");
  if (flag.style.display === "none") {
    flag.style.display = "flex";
  } else {
    flag.style.display = "none";
  }

}
  render(){
    return (
<>
<div id="navbar">
<Link to="/">Home</Link>
  <a onClick={this.showSearchBar}>Search</a>
</div>
</>

  );
}
}

export default NavBar;