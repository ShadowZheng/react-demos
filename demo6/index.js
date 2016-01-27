var EasyForm = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			message: 'react is awesome!',
			isReactAwesome: true 
		};
	},
	render: function() {
		return (
			<div>
				<h1>我想说： {this.state.message}</h1>
				<h2>React是不是很好用 {this.state.isReactAwesome ? '很好用' : '一般般'}</h2>
				<input type="text" valueLink={this.linkState('message')} />
				<br/>

			</div>
		);
	}
});

var SubComp = React.createClass({
	render: function() {
		return (
			<div>
				<h3>这是子组件</h3>

			</div>
		);
	}
});

var SubSubComp = React.createClass({
	render: function() {
		return (
			<div>

			</div>
		);
	}
});

React.render(<EasyForm />, document.getElementById('app'));