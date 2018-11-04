import React from 'react';
import Header from './header/Header';
import Catalog from './catalog/Catalog';
import Cart from './cart/Cart';
import ProductDetail from './product/ProductDetail';
import { Route } from 'react-router-dom';

const Template = props => {
	return (
		<div className="container">
			<Header />
			{props.children}
			<Route path="/cart" component={Cart} />
			<Route path="/item/:item" component={ProductDetail} />
  		<Route path="/" exact component={Catalog} />
		</div>
	)
}

export default Template;
