var React = require('react');
var ReactDOM = require('react-dom');

var redux = require('redux')
var {Provider}  = require('react-redux');
var Reducer = require('./reducers/reducer.js');
var Component = require('./containers/container.js');
var store = redux.createStore(Reducer);


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
	( <Provider store = {store}>
		<Router history={hashHistory}>
			<Route path="/summarizing" component={summarizingComponent}/>
			<Route path="/inventory" component={inventoryComponent}/>
			<Route path="/order" component={orderComponent}/>
			<Route path="/client" component={clientComponent}/>
			<Route path="/market" component={marketComponent}/>
			<Route path="/storage" component={storageComponent}/>
			<Route path="/ranking" component={rankingComponent}/>
			<Route path="/store" component={storeComponent}/>
			<Route path="/Component" component={Component}/>
		</Router>
	</Provider>
	)
	, document.getElementById('content')
);