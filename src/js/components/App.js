import React, { Component } from 'react';
import AppActions from '../actions/app-actions';

class App extends Component {
	state = {
	}

	render() {
		return (
			<div>
				<h1 onClick={AppActions.addItem.bind(null, 'This is the item...')}>React Flux App</h1>
			</div>
		)
	}
}

export default App;
