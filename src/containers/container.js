var React = require('react')
var redux = require('react-redux')
var {bindActionCreators} = require('redux');
var Component = require('../components/list.js')
var Action = require('../actions/action.js')

//将reducer绑定到props上
function mapStateToProps(state){
    return state;
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
    return bindActionCreators(Action,dispatch);
}
module.exports = redux.connect(mapStateToProps,mapDispatchToProps)(Component);
