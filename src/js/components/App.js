import React, { Component } from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './Catalog';
import Cart from './Cart';

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
