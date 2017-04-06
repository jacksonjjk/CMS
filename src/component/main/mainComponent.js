var React = require('react');
var stype = require('./mainComponent.css');

var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
		console.log(1)
	},
	render: function(){
		return (
			<div className="container">
				<div className="header"></div>
				<div className="body clear">
					<ul className="menu">
						<li className="menu-item"><a href="#summarizing" title="">销售汇总</a></li>
						<li className="menu-item"><a href="#inventory" title="">存货列表</a></li>
						<li className="menu-item"><a href="#order" title="">订单列表</a></li>
						<li className="menu-item"><a href="#client" title="">客户列表</a></li>
						<li className="menu-item"><a href="#market" title="">销售流水</a></li>
						<li className="menu-item"><a href="#storage" title="">入库流失</a></li>
						<li className="menu-item"><a href="#Ranking" title="">各类排行</a></li>
						<li className="menu-item"><a href="#store" title="">兄弟店铺</a></li>
					</ul>
					<div id="content"></div>
				</div>
			</div>
		)
	}
})

module.exports = MainComponent;