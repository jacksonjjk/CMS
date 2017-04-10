var React = require('react');
var stype = require('./mainComponent.css');
var $ = require('jquery');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
		
	},
	componentDidMount() {
		
	},
	hiddenSide(){
		if($('.menu').css('display') === 'none'){
			$('.menu').css('display','block');
			$('#content').css('width','85%');
			$('.hiddenSide span').html('隐藏导航栏');
		}else{
			$('.menu').css('display','none');
			$('#content').css('width','100%');
			$('.hiddenSide span').html('显示导航栏');
		}
	 	
	 	
	},
	render: function(){
		return (
			<div className="container">
				<div className="header clear">
					<div className="logo"><img src="./src/component/main/img/logo.png" alt=""/></div>
					<div className="hiddenSide" onClick={this.hiddenSide}><span>隐藏导航栏</span></div>
					<div className="msg">
						<span className="m_user">爱国少年</span>
						<span className="m_test">测试</span>
						<span className="m_logout">注册</span>
					</div>
				</div>
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