import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';
import Chart, {ArgumentAxis, Series, Legend} from 'devextreme-react/chart';
import {DataGrid, Form, List, Scheduler, ScrollView, Template, TextBox, Tooltip, VectorMap} from "devextreme-react";
import {Column} from "devextreme-react/gantt";
import {Item} from "devextreme-react/box";
import {Layer} from "devextreme-react/vector-map";
import service from './data.js'

//Call Methods
class App extends React.Component {
	constructor(props) {
		super(props);

		this.textBoxRef = React.createRef();

		this.focusTextBox = () => {
			this.textBox.focus()
		};
	}

	get textBox() {
		// `current.instance` points to the UI component instance
		return this.textBoxRef.current.instance;
	}

	render() {
		return (
			<div>
				<TextBox ref={this.textBoxRef} />
				<Button text="Focus TextBox" onClick={this.focusTextBox} />
			</div>
		);
	}
}

// //Markup Customization :Using a Template Component
// const renderSelectBoxItem = item => {
// 	return <div>{item.toUpperCase()}</div>;
// }
//
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.employee = service.getEmployee();
// 		this.positions = service.getPositions();
// 		this.positionEditorOptions = {
// 			items: this.positions,
// 			value: '',
// 			itemTemplate: 'selectBoxItem'
// 		};
// 	}
// 	render() {
// 		return (
// 			<Form formData={this.employee}>
// 				<Item
// 					dataField="Position"
// 					editorType="dxSelectBox"
// 					editorOptions={this.positionEditorOptions}
// 				/>
// 				<Template name="selectBoxItem" render={renderSelectBoxItem} />
// 			</Form>
// 		);
// 	}
// }

// //Markup Customization :Using a Custom Component
// class ListItemTmpl extends React.PureComponent {
// 	render() {
// 		return (
// 			<p>{this.props.data.itemProperty}</p>
// 		);
// 	}
// }
//
// class ButtonTmpl extends React.PureComponent {
// 	render() {
// 		return (
// 			<div style={{ padding: 20 }}>
// 				<p>{this.props.data.text}</p>
// 			</div>
// 		);
// 	}
// }
//
// class App extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<List itemComponent={ListItemTmpl} />
// 				<Button component={ButtonTmpl} />
// 			</React.Fragment>
// 		);
// 	}
// }

// //Markup Customization :Using a rendering function
// const renderListItem = (itemData) => {
// 	return <p>{itemData.itemProperty}</p>;
// }
// const renderButton = (button) => {
// 	return <div style={{ padding: 20 }}><p>{button.text}</p></div>;
// }
// class App extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<List itemRender={renderListItem} />
// 				<Button render={renderButton} />
// 			</React.Fragment>
// 		);
// 	}
// }

// //Scrollablw view
// class App extends React.Component {
// 	render() {
// 		return (
// 			<ScrollView>
// 				<div>Some scrollable content</div>
// 			</ScrollView>
// 		);
// 	}
// }

// //callback functions
// class App extends React.Component {
//
// 	render() {
// 		return (
// 			<VectorMap>
// 				<Layer
// 					customize={this.customizeLayers}
// 				/>
// 			</VectorMap>
// 		);
// 	}
//
// 	customizeLayers(elements) {
// 		// ...
// 	}
// }

// //event handling
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// Uncomment the line below to bind the handler to the React component's context, for example, to call this.setState()
// 		this.handleButtonClick = this.handleButtonClick.bind(this);
// 	}
//
// 	render() {
// 		return (
// 			<Button
// 				text="Event Handling"
// 				width={200}
// 				onClick={this.handleButtonClick}
// 			/>
// 		);
// 	}
//
// 	handleButtonClick(e) {
// 		alert("The button was clicked")
// 	}
// }

// // Item element support bawith badge
// class App extends React.Component {
// 	render() {
// 		return (
// 			<List>
// 				<Item>Orange</Item>
// 				<Item badge="New">White</Item>
// 				<Item>Black</Item>
// 			</List>
// 		);
// 	}
// }

// //collections configure Datagrid columns
//
// class App extends React.Component {
// 	render() {
// 		return (
// 			<DataGrid>
// 				<Column
// 					dataField="firstName"
// 					caption="First Name"
// 				/>
// 				<Column
// 					dataField="lastName"
// 					caption="Last Name"
// 					defaultVisible={true}
// 				/>
// 			</DataGrid>
// 		);
// 	}
// }

// class App extends React.Component {
// 	columnEditorOptions = {width: 100};
//
// 	render() {
// 		return (
// 			<DataGrid>
// 				<Column
// 					editorOptions={this.columnEditorOptions}
// 				/>
// 			</DataGrid>
// 		);
// 	}
// }



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


export default App;