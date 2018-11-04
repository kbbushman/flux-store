import React, { Component } from 'react';
import AppStore from '../stores/app-store';

const StoreWatchMixin = (InnerComponent, stateCallback) => class extends Component {
	state = stateCallback(this.props);

	componentWillMount() {
		AppStore.addChangeListener(this._onChange);
	}

	// // Alternative to componentWillMount? Deprecates in React v17
	// componentDidMount() {
	// 	AppStore.addChangeListener(this._onChange);
	// }

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	}

	_onChange = () => {
		this.setState(stateCallback(this.props));
	}

	render() {
		return <InnerComponent {...this.state} {...this.props} />
	}
}

export default StoreWatchMixin;
