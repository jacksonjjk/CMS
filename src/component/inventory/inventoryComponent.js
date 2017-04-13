var React = require('react');
var stype = require('./inventoryComponent.css');
var $ = require('jquery')
var inventoryComponent = React.createClass({
	getInitialState: function() {
		return {
			data: [],
			count: 5,
			Allcout:[],
			num:[],
			pg:''
		}
	},
	componentDidMount: function() {
		$.get("http://localhost:888/search",function(res){
			console.log(res)
			console.log(res[1][0]["FOUND_ROWS()"])
			this.setState({
				data:res[0],
				allcount:Math.ceil(res[1][0]["FOUND_ROWS()"] / res[0].length )
		})	
		for(var i=0; i<this.state.allcount; i++){
			this.state.Allcout.push(i);
		}
		this.setState({
			num:this.state.Allcout
		})
		}.bind(this))
   },
   	handleClick:function(e){
		this.state.pg = e.currentTarget.innerText;
		// $.get("http://localhost:888/page?pagenum="+this.state.pg,function(res){
		// 	this.setState({
		// 		data:res
		// 	})
		// }.bind(this))
		$.get("http://localhost:888/search?pagenum="+this.state.pg,function(res){
			this.setState({
				data:res[0]
			})
		}.bind(this))
	},
	search:function(){
		var value = this.refs.data.value;
			$.get("http://localhost:888/search?value="+value,function(res){
			this.setState({
				data:res[0],
				Allcout:[],
				allcount:Math.ceil(res[1][0]["FOUND_ROWS()"] / res[0].length )
			})
			for(var i=0; i<this.state.allcount; i++){
			this.state.Allcout.push(i);
			}
			this.setState({
				num:this.state.Allcout
			})
			console.log(res)
			}.bind(this))
	},
	render: function() {
		return(
			<div>
				<input type="text"  ref='data' className="input"/><input type="button" className="button" value="search" onClick={this.search}/>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>图片</th>
							<th>商品ID</th>
							<th>商品名称</th>
							<th>商品实价</th>
							<th>商品原价</th>
							<th>折扣</th>
							<th>库存</th>
						</tr>
					</thead>
					<tbody>{
						this.state.data.map(function(item,index){
							return (
							<tr className="line">
								<td><input type="checkbox" /></td>
								<td><img style={{width:'50px'}}src={"./src/img/"+item.uimg}/></td>
								<td>{item.uid}</td>
								<td>{item.uname}</td>
								<td>{item.uprice}</td>
								<td>{item.oprice}</td>
								<td>{item.discount}</td>
								<td>{item.invntory}</td>
							</tr> )
						})
					}
					</tbody>
				</table>
				<div className="allcount">
					{ 
						this.state.num.map(function(item,index){
							return (
								<div className={ this.state.pg == index+1 ? 'count bg' : 'count' }  onClick={this.handleClick} >{item+1}</div>
							)
						}.bind(this))							
					}
				</div>
			</div>
		)
	}
})


module.exports = inventoryComponent;
