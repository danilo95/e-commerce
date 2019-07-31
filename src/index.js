import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import App from './App';
import reducers from './reducers';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
<Provider store={store}>

<Router>
<App>
      <Switch>
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/page3/:id" exact component={Page3} />
        <Route path="/" exact component={Home} />
      </Switch>
      </App>
</Router>

</Provider>,
document.getElementById('root')
);
