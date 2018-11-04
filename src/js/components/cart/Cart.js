import React, { Component } from 'react';
import AppStore from '../../stores/app-store';
import CartItem from './CartItem';
import StoreWatch from '../../hoc/StoreWatch';
import { Link } from 'react-router-dom';

const cartItems = () => {
	return { items: AppStore.getCart() };
};

const Cart = props => {
	let total = 0;
	let items = props.items.map((item, i) => {
		let subtotal = item.cost * item.qty;
		total += subtotal
		return (
			<CartItem
				key={i}
				subtotal={subtotal}
				item={item} />
		)
	});

	return (
		<div>
			<h1>Cart</h1>
			<table className="table table-hover">
				<thead>
					<tr>
						<th></th>
						<th>Item</th>
						<th>Qty</th>
						<th></th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{ items }
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="4" className="text-right">Total</td>
						<td>${total}</td>
					</tr>
				</tfoot>
			</table>
			<Link to="/">Continue Shopping</Link>
		</div>
	)
};

export default StoreWatch(Cart ,cartItems);
