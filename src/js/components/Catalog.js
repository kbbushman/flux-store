import React, { Component } from 'react';
import AppStore from '../stores/app-store';
import CatalogItem from './CatalogItem';

const getCatalog = () => {
	return { items: AppStore.getCatalog() }
}

class Catalog extends Component {
	state = getCatalog();

	render() {
		console.log(this.state)
		let items = this.state.items.map(item => {
			return <CatalogItem key={item.id} item={item} />
		})
		return (
			<div className="row">
				{ items }
			</div>
		)
	}
}

export default Catalog;
