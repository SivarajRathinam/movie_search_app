import React from 'react';
import Suggestions from './suggestions';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  handleChange(event){
  	let value = event.target.value
  	this.setState({value});
  }
  render() {
    const { value, suggestions } = this.state;

    return (
    	<div className={"searchContainer"}>
      		<input type="text" value={value} onChange={this.handleChange.bind(this)} autocomplete={false} className="autoSuggestInput"></input>
      		<Suggestions inputValue={value}/>
      	</div>
    );
  }
}
export default SearchInput;