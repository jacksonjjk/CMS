var {CHANGE,DELETE,ADDITEM} = require('../constants/constant.js');
var $ = require('jquery');
module.exports = function(state,action){
    console.log(action.type)
    var backDatas; 
    var backData;
    var datas;
    function ajax() 
    { 
        $.ajax({
            type:"GET",
            url:"http://localhost:888/index/index",
            dataType:"json",
            async:false,
            data:datas,
            success:function(response){ 
                // console.log(response); 
                backData={datas:response};
            } 
        });
        // console.log(backData);
        return backData;
    }
     var newData=ajax(); 
     // console.log(backData);
     // console.log(newData);
     // return newData;
    switch(action.type){
        case CHANGE:
            var Val=[];
            for(var i=1;i<=event.target.closest('tr').children.length-3;i++){
             Val.push($(event.target.closest('tr').children).find('input')[i].value);         
            }
            var ValStr=JSON.stringify(Val);
            console.log(ValStr);
            // console.log(123);
            datas={"type":"change",
             "dataVal":ValStr
           }
            // console.log(Val)
            var newData=ajax(); 
            backDatas = backData;
            break;
        case DELETE:
           console.log(event.target);
           var _index = $(event.target.closest('tr').children).find('input')[1].value;
           $(event.target.closest('tr').children).find('input')[2].value='';
           $(event.target.closest('tr').children).find('input')[3].value='';
           $(event.target.closest('tr').children).find('input')[4].value='';
           console.log(_index);
           datas={"type":"delete","index":_index};
            var newData=ajax(); 
            backDatas = backData;
            console.log(backDatas);
            break;
        case ADDITEM:
           datas={"type":"addItem"};
           var newData=ajax();
           backDatas = backData;
           console.log(backDatas);
           break;
        default:
            backDatas = backData;
    }
    return backDatas;
}