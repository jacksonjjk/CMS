var React = require('react');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;

var AppComponent = React.createClass({
	render() {
		// return <div>电影</div>;
		// 路由嵌套
		return (
			<div>
				<h1>电影</h1>
				<Link to="/move/chiness">国产</Link>
				<Link to="/move/usa">美国</Link>
				<div>{this.props.children}</div>
			</div>
		);
	}
});

module.exports = AppComponent;