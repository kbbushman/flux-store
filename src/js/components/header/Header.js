import React from 'react';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="row" style={{borderBottom: '1px solid #ccc', marginBottom: '30px'}}>
			<div className="col-sm-2 py-2">
				<Link to="/"><h1>Store</h1></Link>
			</div>
			<div className="col-sm-10 text-right">
				<CartSummary />
			</div>
		</div>
	)
}

export default Header;
