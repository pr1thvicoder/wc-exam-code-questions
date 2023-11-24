import React, { useState } from 'react';

// Greet user  on clicking a button
function App() {
	const GreetUser = () => {
		alert('Hello User!');
	};

	return (
		<div className="App">
			<button type="button" id="btn" onClick={GreetUser}>
				Greet the user
			</button>
		</div>
	);
}

//Increment count with every button click
function Count() {
	const [ count, setCount ] = useState(0);
	function incrementCount() {
		setCount((prevCount) => prevCount + 1);
	}
	return (
		<div>
			<button type="button" onClick={incrementCount}>
				CLICK
			</button>
			<span id="counter">{count}</span>
		</div>
	);
}
export default Count;
