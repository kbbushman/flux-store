import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatch from '../../hoc/StoreWatch';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/CartButton';
import { Link } from 'react-router-dom';

const getCatalogItem = (props) => {
	let item = AppStore.getCatalog().find(({id}) => id === props.match.params.item);
	return {item};
}

const ProductDetail = props => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4>{props.item.title}</h4>
			<img src="http://placehold.it/250x250" />
			<p>{props.item.description}</p>
			<p>${props.item.cost} <span className="text-success">{ props.item.qty && `(${props.item.qty} in cart)` }</span></p>
			<div className="btn-group">
				<Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
				<CartButton
					handler={AppActions.addItem.bind(null, props.item)}
					txt='Add To Cart' />
			</div>
		</div>
  )
};

export default StoreWatch(ProductDetail, getCatalogItem);
