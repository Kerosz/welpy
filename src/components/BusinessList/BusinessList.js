import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends Component {
	render() {
		return (
			<div className='BusinessList'>
				{this.props.businesses.map(business => {
					return <Business business={business} key={business.id} />;
				})}
			</div>
		);
	}
}

BusinessList.propTypes = {
	businesses: PropTypes.array.isRequired,
};

export default BusinessList;
