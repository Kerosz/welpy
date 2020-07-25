import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			businesses: [],
		};

		this.searchYelp = this.searchYelp.bind(this);
	}

	searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then(businesses => {
			this.setState({ businesses: businesses });
		});
	}

	render() {
		const { businesses } = this.state;

		return (
			<div className='App'>
				<h1 className='Nav'>Foody</h1>
				<SearchBar search={this.searchYelp} />
				<BusinessList businesses={businesses} />
			</div>
		);
	}
}

export default App;
