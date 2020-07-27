import React, { Component } from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			businesses: [],
			isLoading: false,
		};

		this.searchYelp = this.searchYelp.bind(this);
	}

	searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then(result => {
			this.setState({ businesses: result });
		});
	}

	render() {
		const { businesses } = this.state;

		return (
			<div className='App'>
				<h1 className='Nav'>Welpy</h1>
				<SearchBar search={this.searchYelp} />
				<BusinessList businesses={businesses} />
			</div>
		);
	}
}

export default App;
