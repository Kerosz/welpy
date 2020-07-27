import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match',
		};

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count',
		};

		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSortByChange = this.handleSortByChange.bind(this);
	}

	getSortByClass(sortByOption) {
		return sortByOption === this.state.sortBy ? 'active' : '';
	}

	handleSortByChange(sortByOption) {
		this.setState({ sortBy: sortByOption }, () => {
			const { term, location, sortBy } = this.state;

			if (term !== '' || location !== '') {
				this.props.search(term, location, sortBy);
			}
		});
	}

	handleTermChange(e) {
		const newTerm = e.target.value;
		this.setState({ term: newTerm });
	}

	handleLocationChange(e) {
		const newLocation = e.target.value;
		this.setState({ location: newLocation });
	}

	handleSearch(e) {
		const { term, location, sortBy } = this.state;
		this.props.search(term, location, sortBy);

		e.preventDefault();
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(option => {
			let sortByOptionValue = this.sortByOptions[option];

			return (
				<li
					key={sortByOptionValue}
					className={this.getSortByClass(sortByOptionValue)}
					onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
					{option}
				</li>
			);
		});
	}

	render() {
		return (
			<div className='SearchBar'>
				<div className='SearchBar__sort'>
					<ul className='Sort__list'>{this.renderSortByOptions()}</ul>
				</div>
				<form className='SearchBar__form' onSubmit={this.handleSearch}>
					<div className='SearchBar__fields'>
						<label className='Field__label' htmlFor='food'>
							Search
						</label>
						<input
							className='Field__input'
							name='food'
							placeholder='burgers, pizza, spas, clubs...'
							onChange={this.handleTermChange}
						/>
					</div>
					<div className='SearchBar__fields'>
						<label className='Field__label' htmlFor='location'>
							Location
						</label>
						<input
							className='Field__input'
							name='location'
							placeholder='address, city or postcode'
							onChange={this.handleLocationChange}
						/>
					</div>
					<div className='SearchBar__fields'>
						<button type='submit' className='Field__btn'>
							Go
						</button>
					</div>
				</form>
			</div>
		);
	}
}

SearchBar.propTypes = {
	search: PropTypes.func.isRequired,
};

export default SearchBar;
