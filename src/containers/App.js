	import React, {Component} from 'react';
	import CardList from '../components/CardList';
	import SearchBox from '../components/SearchBox';
	//import friends from './friends';
	import './App.css';
	import Scroll from '../components/Scroll';

	class App extends Component {
		constructor() {
			super()
			this.state = {
				friends: [],
				searchfield: ''
			}
		}

		componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({friends: users}));	

		}

		anySearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
		}

		render() {
			const filteredFriends = this.state.friends.filter(friends => {
				return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
			if(this.state.friends.lenght === 0) {
				return <h1>Loading</h1>
			} else {
				return (
					<div className='tc'>
					<h1 className="f2">Full Stack Java Developers</h1>
					<SearchBox searchChange={this.anySearchChange}/>
					<Scroll>
					<CardList friends={filteredFriends}/>
					</Scroll>
					</div>

					);
			}
		}	
	}

	export default App;