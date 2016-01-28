import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import $ from 'jquery';

require('./app.css');

var LinkButton = React.createClass({
	getInitialState: function () {
		return {liked: false};
	},
	handleClick: function () {
		this.setState({liked: !this.state.liked});
	},
	render: function () {
		var text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<p onClick={this.handleClick}>
				You {text} this, Click to toggle.
			</p>
		);
	}
});

ReactDOM.render(
	<LinkButton />
	, document.getElementById('app'));

