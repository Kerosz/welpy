import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
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
		this.setState({ sortBy: sortByOption });
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
				<div className='SearchBar-sort-options'>
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className='SearchBar-fields'>
					<input
						placeholder='Search Businesses'
						onChange={this.handleTermChange}
					/>
					<input placeholder='Where?' onChange={this.handleLocationChange} />
				</div>
				<div className='SearchBar-submit'>
					<submit className='btn' onClick={this.handleSearch}>
						Let's Go
					</submit>
				</div>
			</div>
		);
	}
}

export default SearchBar;
