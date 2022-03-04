import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';
import Chart, {ArgumentAxis, Series, Legend} from 'devextreme-react/chart';
import {DataGrid, Scheduler, TextBox, Tooltip} from "devextreme-react";
import {Column} from "devextreme-react/gantt";

class App extends React.Component {
	columnEditorOptions = {width: 100};

	render() {
		return (
			<DataGrid>
				<Column
					editorOptions={this.columnEditorOptions}
				/>
			</DataGrid>
		);
	}
}

	export default App;

//statis componenets

// const data = [{
// 	arg: 1990,
// 	val: 5320816667
// }, {
// 	arg: 2000,
// 	val: 6127700428
// }, {
// 	arg: 2010,
// 	val: 6916183482
// }];
//
// const appointments = [{
// 	text: 'Website Re-Design Plan',
// 	startDate: new Date(2019, 4, 22, 9, 30),
// 	endDate: new Date(2019, 4, 22, 11, 30)
// }, {
// 	text: 'Book Flights to San Fran for Sales Trip',
// 	startDate: new Date(2019, 4, 22, 12, 0),
// 	endDate: new Date(2019, 4, 22, 13, 0),
// 	allDay: true
// }, {
// 	text: 'Install New Router in Dev Room',
// 	startDate: new Date(2019, 4, 23, 10, 30),
// 	endDate: new Date(2019, 4, 23, 16, 30)
// }];
//
// class App extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			text: 'TEXT'
// 		};
//
// 		this.handleValueChange = this.handleValueChange.bind(this);
// 	}
//
// 	columnEditorOptions = { width: 100 };
//
// 	render() {
// 		return (
// 			<div>
// 				<div>
// 					<Button
// 						text="Click me"
// 						onClick={this.sayHelloWorld}
// 					/>
// 				</div>
// 				<div>
// 					<Chart dataSource={data}>
// 						<ArgumentAxis tickInterval={10}/>
// 						<Series type="bar"/>
// 						<Legend visible={false}/>
// 					</Chart>
// 				</div>
// 				<div>
// 					<TextBox
// 						value={this.state.text}
// 						onValueChange={this.handleValueChange}
// 						valueChangeEvent="input"
// 					/>
// 					<br />
// 					<div>{this.state.text}</div>
// 				</div>
// 				<div>
// 					<Scheduler
// 						dataSource={appointments}
// 						height={600}
// 						editing={false}
// 						defaultCurrentDate={new Date(2019, 4, 22)}
// 						startDayHour={9}
// 					/>
// 				</div>
// 				<div>
// 					<Button
// 						disabled={false}
// 						width={100}
// 						text="Click me"
// 					/>
// 				</div>
// 				<div>
// 					<Chart>
// 						<Tooltip
// 							enabled={true}
// 							format="thousands"
// 						/>
// 					</Chart>
// 				</div>
// 				<div>
// 					<DataGrid>
// 						<Column
// 							editorOptions={this.columnEditorOptions}
// 						/>
// 					</DataGrid>
// 				</div>
// 			</div>
// 		);
// 	}
//
//
// 	sayHelloWorld() {
// 		alert('Hello world!');
// 	}
//
// 	handleValueChange(value) {
// 		this.setState({
// 			text: value.toUpperCase()
// 		});
// 	}
// }
