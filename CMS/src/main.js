var React = require('react');
var ReactDOM = require('react-dom');
var Cat = require('./component/TomComponent.jsx');

// var TomComponent = React.createClass({
// 	render: function(){
// 		return <h1>Tom</h1>;
// 	}
// });
// http://localhost:80/index.php
// http://localhost:80/index.php
var baseUrl = '';
$.get(baseUrl + 'index.php');


ReactDOM.render(<Cat />, document.getElementById('content'));