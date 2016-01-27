import React from 'react';
import ReactDOM from 'react-dom';

require('./app.css');

var names = ['Alice', 'Andy', 'Molly'];
var arr = [
	<h1>React one</h1>,
	<h1>React Two</h1>
];

// 定义一个组件
var HelloMessage = React.createClass({
	render: function() {
		return <h1>Hello {this.props.name}</h1>
	}
});

ReactDOM.render(
	<div>
	{
		names.map(function (name) {
			return <div>Hello, {name}</div>
		})
	}
	{arr}
	<HelloMessage name="React Component" />
	</div>
	, document.getElementById('app'));

