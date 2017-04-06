var React = require('react');
// var $ = require('jquery');

var stype = require('./loginComponent.css');


var LoginComponent = React.createClass({
	loginHandler: function(){
		// $.post('''',function(){
		// //跳转路由
		// })

		//
	},
	render: function(){
		// this.props.params.userid
		return (
			<div className="login">
				<input type="text" />
				<input type="password" />
				<div>
					<input type="button" value="登陆" onClick={this.loginHandler}/>
					<a href="#">忘记密码</a>
				</div>
			</div>
		)
	}
})

module.exports = LoginComponent;