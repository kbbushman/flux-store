import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatch from '../../hoc/StoreWatch';
import { Link } from 'react-router-dom';

const CartSummary = props => {
	return (
		<div style={{padding: '15px 0'}}>
			<Link to="/cart" className="btn btn-success">
				{ `Cart Items: ${props.qty} / $${props.total}` }
			</Link>
		</div>
	)
}

export default StoreWatch(CartSummary, AppStore.getCartTotal);
