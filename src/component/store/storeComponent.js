var React = require('react');
var stype = require('./storeComponent.css');

var storeComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
		console.log(1)
	},
	render: function(){
		return (
			<div>
				store
			</div>
		)
	}
})

module.exports = storeComponent;