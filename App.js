import React from 'react';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			input: '/* Enter JSX here */',
			output: '',
			error: ''
		}
		this.update = this.update.bind(this);
	}

	update(event){
		let userInput = event.target.value;
		try {
			this.setState({
				output: babel.transform(userInput,{
					stage: 0,
					loose: 'all'
				}).code,
			error: ''
			})
		}
		catch(error){
			this.setState({
				error: error.message
			})
		}
	}

	render(){
		return (
			<div>
				<header>{this.state.error}</header>
				<div classname='container'>
					<textarea onChange={this.update} defaultValue={this.state.input}>
					</textarea>
					<pre>
						{this.state.output}
						</pre>
				</div>
			</div>
		)
	}	
}

export default App