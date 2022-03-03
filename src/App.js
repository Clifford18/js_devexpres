import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';
import Chart, {ArgumentAxis, Series, Legend} from 'devextreme-react/chart';

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
			</div>
		);
	}


	sayHelloWorld() {
		alert('Hello world!');
	}
}

export default App;