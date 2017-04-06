var React = require('react');
var stype = require('./orderComponent.css');

var orderComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
		console.log(1)
	},
	render: function(){
		return (
			<div>
				order
			</div>
		)
	}
})

module.exports = orderComponent;