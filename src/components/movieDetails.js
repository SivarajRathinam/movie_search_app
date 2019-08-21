import React from 'react';
import axios from 'axios';
import {API_KEY} from '../constants';
import '../styles/movieDetails.css';

class MovieDetails extends React.Component{
	constructor(props){
		super(props)
		this.state={
			movieDetails:""
		}
	}
	updateMovieDetails(){
		let url = `http://www.omdbapi.com/?i=${this.props.movieId}&apikey=${API_KEY}`
		axios.get(url)
			.then(res => {
				const movieDetails = res.data 
				this.setState({ movieDetails });
			})
	}
	componentDidUpdate(prevProps){
		if(this.props.movieId != prevProps.movieId){
			this.updateMovieDetails()
		}
	}
	loadMovieDetails(){
		if(this.state.movieDetails != ""){
			let movieDetails = this.state.movieDetails;
			return (<>
				<div className="movieTitle">{movieDetails.Title}</div>
				<div className="movieReleased"> <b>Released</b> : {movieDetails.Released}</div>
				<div className="movieGenere"><b>Genere</b> : {movieDetails.Genre}</div>
				<div className="movieWriter"><b>Writer :</b> {movieDetails.Writer}</div>
				<div className="movieRuntime"><b>Movie Runtime</b> : {movieDetails.Runtime}</div>
				<div className="moviePoster"><img src={movieDetails.Poster}/></div>
			</>)
		}
		return null
	}
	render(){
		return <div className={"movieContainer"}>
					{this.loadMovieDetails()}
				</div>
	}
}

export default MovieDetails;