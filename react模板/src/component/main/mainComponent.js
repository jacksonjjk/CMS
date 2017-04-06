var React = require('react');
var stype = require('./mainComponent.css');

var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
	},
	render: function(){
		return (
			<div className="dk-container">
				<div className="dk-header"></div>
				<div className="dk-body">
					<div className="dk-menu">
						<ul className="list-group">
							<li className="list-group-item"><a href="#homework" title="">homework</a></li>
							<li className="list-group-item"><a href="#page1" title="">page1</a></li>
							<li className="list-group-item"><a href="#page2" title="">page2</a></li>
							<li className="list-group-item"><a href="#page3" title="">page3</a></li>
						</ul>
					</div>
					<div className="dk-content" data-ui-view=""></div>
				</div>
				<div className="dk-footer">@dk</div>
			</div>
		)
	}
})

module.exports = MainComponent;