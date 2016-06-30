import React from 'react';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			input: '',
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
				<div className='container'>
					<textarea 
						onChange={this.update}
						defaultValue={this.state.input}
						placeholder='Enter JSX here'>
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