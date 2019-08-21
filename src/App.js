import React from 'react';
import SearchInput from './components/searchInput';
import MovieDetails from './components/movieDetails';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			movieId:""
		}
	}
	handleSuggestionClick(id){
		this.setState({
			movieId:id
		})
	}
	render(){
		return <div>
			<SearchInput handleSuggestionClick={this.handleSuggestionClick.bind(this)}/>
			<MovieDetails movieId={this.state.movieId}/>
		</div>
	}
}

export default App;