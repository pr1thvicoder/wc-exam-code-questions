import React from 'react';

//class component
class Car extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand : 'Ford',
			model : 'Mustang',
			color : 'blue',
			year  : 1967
		};
	}

	changeColor = () => {
		this.setState({ color: 'red' });
	};

	render() {
		return (
			<div>
				<h1>My {this.state.brand}</h1>
				<p>
					It is a {this.state.color} {this.state.model} from {this.state.year}
				</p>
				<button type="button" onClick={this.changeColor}>
					Change Color
				</button>
			</div>
		);
	}
}

//Greet a User
function GreetUser() {
	return (
		<div className="App">
			<header className="AppHeader">
				<h1>Hello World</h1>
			</header>
		</div>
	);
}

//Using React Refs
class App extends React.Component {
	constructor(props) {
		super(props);
		this.myInput = React.createRef();
	}
	componentDidMount() {
		this.myInput.current.focus();
	}
	clickHandler = () => {
		alert(this.myInput.current.value);
	};
	render() {
		return (
			<div>
				<input ref={this.myInput} />;
				<button onClick={this.clickHandler}>Submit</button>;
			</div>
		);
	}
}
export default App;
