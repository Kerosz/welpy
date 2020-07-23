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
	}

	getSortByClass(sortByOption) {
		return sortByOption === this.state.sortBy ? 'active' : '';
	}

	handleSortByChange(sortByOption) {
		this.setState({ sortBy: sortByOption });
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map((option) => {
			let sortByOptionValue = option;

			return (
				<li key={sortByOptionValue} className={this.getSortByClass()}>
					{option}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<submit className="btn">Let's Go</submit>
				</div>
			</div>
		);
	}
}

export default SearchBar;
