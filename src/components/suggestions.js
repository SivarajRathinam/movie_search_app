import React from 'react';
import {API_KEY} from '../constants';
import axios from 'axios';

class Suggestion extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			suggestions:[
    {
      "Title": "Garage Sale Mystery: Murder by Text",
      "Year": "2017",
      "imdbID": "tt7235014",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2Q1YThkNDQtNmJhYy00YWVjLTgzMDMtZWM4M2NmZjNhMWMyXkEyXkFqcGdeQXVyNDE4NDg1NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Paranormal Extremes: Text Messages from the Dead",
      "Year": "2015",
      "imdbID": "tt3959084",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4ODEzMzY5OF5BMl5BanBnXkFtZTgwNTMwNzY2OTE@._V1_SX300.jpg"
    },
    {
      "Title": "Text",
      "Year": "2008",
      "imdbID": "tt1190078",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNzkyMjQxM15BMl5BanBnXkFtZTgwNTUyNTMxMjE@._V1_SX300.jpg"
    },
    {
      "Title": "Text Santa 2014",
      "Year": "2014",
      "imdbID": "tt4307936",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjliNzhiM2ItNTUzZS00Y2M1LWI0NmYtN2Y2ZDdjNTQ1MDFmXkEyXkFqcGdeQXVyNjEyMjI1MjY@._V1_SX300.jpg"
    },
    {
      "Title": "Life in Text",
      "Year": "2013",
      "imdbID": "tt3123380",
      "Type": "movie",
      "Poster": "N/A"
    }]
		}
	}
	updateSuggestions(){
		let url = `http://www.omdbapi.com/?s=${this.props.inputValue}&apikey=${API_KEY}`
		// axios.get()
			// .then(res => {
			// 	const suggestions = [];
			// 	if('Search' in res.data){
			// 		suggestions = res.data.Search
			// 	}
			// 	this.setState({ suggestions });
			// })
			console.log(url)
	}
	componentDidUpdate(prevProps){
		if(this.props.inputValue!=prevProps.inputValue){
			this.updateSuggestions()
		}
	}
	loadSuggestions(){
		return this.state.suggestions.map((suggestion)=>{
			return <li key={suggestion.imdbID}>{suggestion.Title}</li>
		})
	}
	render(){
		return (<div>
					<ul>
						{this.loadSuggestions()}
					</ul>
				</div>)
	}
}
export default Suggestion;