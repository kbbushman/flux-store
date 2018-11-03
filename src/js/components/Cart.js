import React, { Component } from 'react';
import AppStore from '../stores/app-store';
import CartItem from './CartItem';

const cartItems = () => {
	return { items: AppStore.getCart() };
};

class Cart extends Component {
	state = cartItems();

	componentWillMount() {
		AppStore.addChangeListener(this._onChange)
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange)
	}

	_onChange = () => {
		this.setState({
			cartItems
		});
	}

	render() {
		let total = 0;
		let items = this.state.items.map((item, i) => {
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
				<table className="table table-hover table-responsive">
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
			</div>
		)
	}
}

export default Cart;
