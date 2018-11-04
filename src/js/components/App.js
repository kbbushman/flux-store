import React, { Component, Fragment } from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './catalog/Catalog';
import Cart from './cart/Cart';
import Header from './header/Header';
import Template from './Template';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = props => {
	return (
		  <Router>
		  	<Switch>
		  		<Route path="/" component={Template} />
			  		{/* <Route path="/cart" component={Cart} />
			  		<Route path="/" exact component={Catalog} /> */}
		  	</Switch>
		  </Router>
	)
}

export default App;
