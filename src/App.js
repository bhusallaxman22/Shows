import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { Shows } from './Shows';



class App extends Component {
	constructor() {
		super()
		this.state = {
			Shows: Shows,
			searchfield:''
		}
	}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
}

	render () {
		const { Shows, searchfield } = this.state;
		const filteredShows = Shows.filter(show => {
			return show.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Shows.length ?

		<h1>LOADING</h1> :
		(
			<div className='tc'>

			<h1 className= "glitch" data-text="SHOWSLIST">SHOWSLIST</h1>
			<SearchBox searchChange = {this.onSearchChange} />
			<Scroll>
				<CardList Shows={filteredShows}/>
				</Scroll>
			</div>
		);
		}
}

export default App;