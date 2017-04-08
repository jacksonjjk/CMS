var React = require('react');
var stype = require('./mainComponent.css');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
		console.log(2)
	},
	componentDidMount() {
		console.log(this.props.router)
		console.log(this.props.route)
		console.log(this.props)
	},
	
	render: function(){
		return (
			<div className="container">
				<div className="header"></div>
				<div className="body clear">
					<ul className="menu">
						<li className="menu-item"><Link to="/summarizing">销售汇总</Link></li>
						<li className="menu-item"><Link to="/inventory">存货列表</Link></li>
						<li className="menu-item"><Link to="/order">订单列表</Link></li>
						<li className="menu-item"><Link to="/client">客户列表</Link></li>
						<li className="menu-item"><Link to="/market">销售流水</Link></li>
						<li className="menu-item"><Link to="/storage">入库流失</Link></li>
						<li className="menu-item"><Link to="/Ranking">各类排行</Link></li>
						<li className="menu-item"><Link to="/store">兄弟店铺</Link></li>
					</ul>
					<div id="content">{this.props.children}</div>
				</div>
			</div>
		)
	}
})

module.exports = MainComponent;