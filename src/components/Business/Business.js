import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Business.css';
import placeholder from '../../img/placeholder.png';

class Business extends Component {
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
			url,
			// reviewCount,
		} = this.props.business;

		const decideWhichImage = imageSrc ? imageSrc : placeholder;

		return (
			<div className='Business'>
				<div className='image__container'>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						<img src={decideWhichImage} alt='Placeholder' />
					</a>
				</div>
				<div className='text__container'>
					<h2 className='Business__name'>{name}</h2>
					<h3 className='rating'>{rating} stars</h3>
					<div className='Business__information'>
						<div className='Business__address'>
							<p className='Address__label'>{address}</p>
							<p className='Address__label'>{city}</p>
							<p className='Address__label'>
								{state} {zipCode}
							</p>
						</div>
						<div className='Business__reviews'>
							<h4 className='category'>{category}</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Business.propTypes = {
	business: PropTypes.object.isRequired,
};

export default Business;
