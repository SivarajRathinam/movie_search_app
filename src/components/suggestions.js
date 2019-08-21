import React from 'react';
import {API_KEY} from '../constants';
import axios from 'axios';

class Suggestion extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			suggestions:[]
		}
	}
	updateSuggestions(){
		let url = `http://www.omdbapi.com/?s=${this.props.inputValue}&apikey=${API_KEY}`
		if(this.props.inputValue == ""){
			this.setState({ suggestions:[] })
		}else{
		axios.get(url)
			.then(res => {
				let suggestions = [];
				if('Search' in res.data){
					suggestions = res.data.Search
				}
				this.setState({ suggestions });
			})
		}
			console.log(url)
	}
	componentDidUpdate(prevProps){
		if(this.props.inputValue!=prevProps.inputValue){
			this.updateSuggestions()
		}
	}
	handleClick(event){
		this.setState({
			suggestions:[]
		})
		this.props.handleClick(event.target.dataset.id);
	}
	loadSuggestions(){
		return this.state.suggestions.map((suggestion)=>{
			return <li onClick={this.handleClick.bind(this)} data-id={suggestion.imdbID} key={suggestion.imdbID}>{suggestion.Title}</li>
		})
	}
	render(){
		if (this.state.suggestions && this.state.suggestions.length>0)
			return (<div>
						<ul>
							{this.loadSuggestions()}
						</ul>
					</div>)
		return null
	}
}
export default Suggestion;