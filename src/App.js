import React from 'react';
import SearchBar from './components/SearchBar';
import NavBar from './components/navvbar';
import ListOfProducts from './components/ListofProducts';
function App() {
  return (
    <div className="cotainer">  
    <div className="header">
    <NavBar/>
    <SearchBar/>
    <ListOfProducts/>
    </div>
    </div>
  );
}

export default App;
