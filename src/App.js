import React from 'react';
import SearchInput from './components/searchInput'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			<SearchInput/>
		</div>
	}
}

export default App;