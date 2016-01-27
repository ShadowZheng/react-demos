var MessageBox = React.createClass({
	getInitialState: function() {
		return {
			isVisible : true,
			titleMsg: '你好，世界！',
			messages: [
				'码农1',
				'码农2',
				'码农3'
			]
		}
	},
	render: function() {
		return (
			<div>
				<h1>{this.state.titleMsg}</h1>
				<SubMsg messages={this.state.messages} />
			</div>
		);
	}
});

var SubMsg = React.createClass({
	render: function() {
		var msgs = [];
		this.props.messages.forEach(function(msg, index) {
			msgs.push(
				<p>码农说： {msg}</p>
			)
		})
		return (
			<div>{msgs}</div>	
		);
	}
});

React.render(<MessageBox/>, document.getElementById('app'));