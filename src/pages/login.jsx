import React from 'react';
import LoginComponent from '../components/loginComponent';

class Login extends React.Component {


  
  componentDidMount() {
    
    document.getElementById("searhcontainer").style.display = "none";
    
  }

  render() {
  return (
    <div className="logincontainer">
    <LoginComponent/>
    </div>
  );
  }
}

export default Login;
