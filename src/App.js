import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';
import Chart, {ArgumentAxis, Series, Legend} from 'devextreme-react/chart';
import {TextBox} from "devextreme-react";

const data = [{
	arg: 1990,
	val: 5320816667
}, {
	arg: 2000,
	val: 6127700428
}, {
	arg: 2010,
	val: 6916183482
}];

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'TEXT'
		};

		this.handleValueChange = this.handleValueChange.bind(this);
	}

	render() {
		return (
			<div>
				<div>
					<Button
						text="Click me"
						onClick={this.sayHelloWorld}
					/>
				</div>
				<div>
					<Chart dataSource={data}>
						<ArgumentAxis tickInterval={10}/>
						<Series type="bar"/>
						<Legend visible={false}/>
					</Chart>
				</div>
				<div>
					<TextBox
						value={this.state.text}
						onValueChange={this.handleValueChange}
						valueChangeEvent="input"
					/>
					<br />
					<div>{this.state.text}</div>
				</div>
			</div>
		);
	}


	sayHelloWorld() {
		alert('Hello world!');
	}

	handleValueChange(value) {
		this.setState({
			text: value.toUpperCase()
		});
	}
}

export default App;