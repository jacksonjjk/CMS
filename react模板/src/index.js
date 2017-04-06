var React = require('react');
var ReactDOM = require('react-dom');
var MainComponent = require('./component/main/mainComponent.js');
var LoginComponent = require('./component/login/loginComponent.js');

var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={MainComponent} onEnter={loginFilter}/>
		<Route path='/login' component={LoginComponent}/>
	<Route path='/edituser/:userid' component={LoginComponent}/>
	</Router>,
	document.getElementById('content')
)

function loginFilter(nextState, replace, next){
	//$.post
	//判断当前用户是否已登陆或者是否有权限访问此路由
	// replace('login');
	// next();
}