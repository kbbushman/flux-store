import React, { Component } from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './catalog/Catalog';
import Cart from './cart/Cart';

class App extends Component {
	state = {
	}

	render() {
		return (
			<div className="container">
				<Catalog />
				<Cart />
			</div>
		)
	}
}

export default App;
