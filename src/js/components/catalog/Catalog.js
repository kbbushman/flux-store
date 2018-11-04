import React, { Component } from 'react';
import AppStore from '../../stores/app-store';
import CatalogItem from './CatalogItem';
import StoreWatch from '../../hoc/StoreWatch';

const getCatalog = () => {
	return { items: AppStore.getCatalog() }
}

const Catalog = props => {
	let items = props.items.map(item => {
		return <CatalogItem key={item.id} item={item} />
	})
	return (
		<div className="row">
			{ items }
		</div>
	)
};

export default StoreWatch(Catalog, getCatalog);
