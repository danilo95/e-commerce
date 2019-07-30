import React from 'react';


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
  <a className="active" href="javascript:void(0)">Home</a>
  <a onClick={this.showSearchBar}>Search</a>
  <a href="#">Login</a>
 
</div>
</>

  );
}
}

export default NavBar;