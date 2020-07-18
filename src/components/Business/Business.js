import React from 'react';
import './Business';

const business = {
	imageSrc:
		'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};

class Business extends React.Component {
	render() {
		const {
			imageSrc,
			name,
			address,
			city,
			state,
			zipCode,
			category,
			rating,
			reviewCount,
		} = business;

		return (
			<div className="Business">
				<div className="image-container">
					<img src={imageSrc} alt="" />
				</div>
				<h2>{name}</h2>
				<div className="Business-information">
					<div className="Business-address">
						<p>{address}</p>
						<p>{city}</p>
						<p>
							{state} {zipCode}
						</p>
					</div>
					<div className="Business-reviews">
						<h3>{category}</h3>
						<h3 className="rating">{rating} stars</h3>
						<p>{reviewCount} reviews</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;
