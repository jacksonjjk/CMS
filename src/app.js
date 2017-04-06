var React = require('react');
var ReactDOM = require('react-dom');

var loginComponent =require('./component/login/loginComponent.js');
var mainComponent = require('./component/main/mainComponent.js');
var summarizingComponent = require('./component/summarizing/summarizingComponent.js');
var inventoryComponent = require('./component/inventory/inventoryComponent.js');
var marketComponent = require('./component/market/marketComponent.js');
var orderComponent = require('./component/order/orderComponent.js');
var rankingComponent = require('./component/ranking/rankingComponent.js');
var storeComponent = require('./component/store/storeComponent.js');
var storageComponent = require('./component/storage/storageComponent.js');
var clientComponent = require('./component/client/clientComponent.js');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={mainComponent}/>
	</Router>)
	, document.getElementById('main')
);

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/summarizing" component={summarizingComponent}/>
		<Route path="/inventory" component={inventoryComponent}/>
		<Route path="/order" component={orderComponent}/>
		<Route path="/client" component={clientComponent}/>
		<Route path="/market" component={marketComponent}/>
		<Route path="/storage" component={storageComponent}/>
		<Route path="/ranking" component={rankingComponent}/>
		<Route path="/store" component={storeComponent}/>
	</Router>)
	, document.getElementById('content')
);

// var RootComponent = React.createClass({
// 	render() {
// 		return (
// 			<div>
// 				<h1>index</h1>
// 				<ul>
// 				  	<li><Link to="/move">电影</Link></li>
// 				  	<li><Link to="/music">音乐</Link></li>
// 				</ul>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(
// 	(<Router history={hashHistory}>
// 		<Route path="/" component={RootComponent}/>
// 		<Route path="/move" component={MoveComponent}/>
// 		<Route path="/music" component={MusicComponentCopy}/>
// 	</Router>)
// 	, document.getElementById('content')
// );


// 路由嵌套
// var RootComponent = React.createClass({
//     componentDidMount() {
//       this.props.router.setRouteLeaveHook(
//         this.props.route, 
//         this.routerWillLeave
//       )
//     },

//     routerWillLeave(nextLocation) {
//       // 返回 false 会继续停留当前页面，
//       // 否则，返回一个字符串，会显示给用户，让其自己决定
//       return '确认要离开？';
//     },	
// 	render() {
// 		return (
// 			<div>
// 				<h1>index</h1>
// 				<ul>
// 				  	<li><Link to="/movie">电影</Link></li>
// 				  	<li><Link to="/music">音乐</Link></li>
// 				</ul>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(
// 	(<Router history={hashHistory}>
// 		<Route path="/" component={RootComponent}/>
// 		<Route path="/movie" component={MoveComponent}>
// 			<IndexRoute component={MoveTypeComponent}/>
// 			<Route path="chiness" component={MoveChinessComponent} />
// 			<Route path="usa" component={MoveUSAComponent} />
// 		</Route>
// 		<Route path="/music(/:id)" component={MusicComponentCopy} />
// 	</Router>)
// 	, document.getElementById('content')
// );

// function enterMusicFun(nextState, replace, next){
// 	replace('/move');
// 	next();
// }