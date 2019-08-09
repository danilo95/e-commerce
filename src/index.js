import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainProduct from "./pages/MainProduct";
import Home from "./pages/Home";
import Login from "./pages/login";
import CartPage from "./pages/CartPage";
import NoMatch from "./pages/NoMatch";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/MainProduct/:id" exact component={MainProduct} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/CartPage" exact component={CartPage} />
          <Route component={NoMatch}/>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
