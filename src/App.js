import React from 'react';
import SearchBar from './components/SearchBar';
import NavBar from './components/navvbar';
import ListOfProducts from './components/ListofProducts';

function App(props) {
  return (
    <>
    
    <div className="header">
      <NavBar/>
      <SearchBar/>
    </div>
    <div className="cotainer">  
    {props.children}
    </div>
    </>
  );
}

export default App;
