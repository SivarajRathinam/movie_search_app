import React from 'react';
import Suggestions from './suggestions';
import '../styles/suggestion.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestionText:''
    };
  }

  handleInputChange(event){
		const value = event.target.value
		clearTimeout(this.timerObj)
		this.timerObj = setTimeout(() => {
			this.handleChange(value)
			clearTimeout(this.timerObj)
		}, 500)
		this.setState({value})
	}
  handleChange(suggestionText){
		this.setState({suggestionText})
  }
  render() {
    const { value, suggestionText } = this.state;

    return (
    	<div className={"searchContainer"}>
      		<input type="text" value={value} placeholder="Type Movie Name" onChange={this.handleInputChange.bind(this)} autoComplete="false" className="autoSuggestInput"></input>
      		<Suggestions inputValue={suggestionText} handleClick={this.props.handleSuggestionClick}/>
      	</div>
    );
  }
}
export default SearchInput;