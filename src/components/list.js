var React = require('react');
var redux = require('redux');
// var Action = require('../actions/action.js');
var Component = React.createClass({
	render: function(){
		console.log(this.props);
		var self = this;
		var items = this.props.datas.map(function(item,index){
            return(
		              <tr key={index}>
		                 <td><input type="checkbox"/></td>
		            	 <td><input value={item.index_id} /></td>
		            	 <td><input defaultValue={item.img}/></td>
		            	 <td><input defaultValue={item.price}/></td>
		            	 <td><input defaultValue={item.introduction}/></td>
		            	 <td><input id={index} type="button" value="编辑" onClick={self.props.change}/></td>
		            	 <td><input id="delete" type="button" value="删除" onClick={self.props.delete}/></td>
		             </tr>
            	) 
            

		})
		return(
			<div>
			    <input  type="button" value="添加"  onClick={this.props.addItem}/>
			   {items}
			</div>
		)
		return(
		<div>
				summarizing
			</div>
		)
	}
})

module.exports =Component;