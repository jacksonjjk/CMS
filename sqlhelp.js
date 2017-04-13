var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
  
   var server2 = new WebpackDevServer(webpack(config), {
     stats: config.devServer.stats,
     hot: true,
     publicPath: config.output.publicPath
   });
   server2.listen(3000, 'localhost', function(err, result) {
     if (err) {
       return console.log(err);
     }
     return console.log('listening at locahost:3000...');
   })

//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//调用 express 模块
var app = express();
//调用mysql模块
var mysql = require('mysql');
//连接mysql所需的用户名和密码
var message = require('./model/message.model.js');

var server = mysql.createConnection({
  user:'root',
  password:'',
  multipleStatements:true //启动多条语句执行

});
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

  //连接mysql
server.connect(function(error,results){
  if(error){
    // console.log('connection Error:'+error);
    return
  }
  // console.log('connect to MySQL');
    // console.log(data);
  })
//操作mysql数据库
    server.query("use `okbuy`");





app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.post('/register/register', urlencodedParser,function(request, response) {
    console.log(request.body)
    var name = request.body.name;
    var password = request.body.password;
    server.query("SELECT * FROM users WHERE username='"+name+"'", function (err, data){
      if(err){
        console.log('{err: 1, msg: "数据库出错"}');
        response.end();
      }
      else{
        if(data.length>0){
          console.log('{err: 1, msg:"用户名已存在"}');
          response.end();
        }
        else{
          console.log('111')
          server.query("INSERT INTO users (username,userpassword) VALUES('"+name+"', '"+password+"')", function (err, data){
            if(err){
              console.log('{err: 1, msg: "数据库出错"}');
              response.end();
            }
            else{
              console.log('{err: 0, msg: "注册成功"}');
              response.end();
            }
          });
        }
      }
    });
});



app.get('/index/index', urlencodedParser, function(request, response){
  // // 返回数据
  //   server.query("select * from `indexGoods`",function(err,rs,fields){
  //     if(err){
  //       console.log(err);
  //     }else{
  //       response.send(rs);
  //       // console.log(rs);
  //     }
  //   })

  // 插入空数据
  if(request.query){
   console.log(request.query.type);
   console.log(request.query);
  if(request.query.type=="addItem"){
  server.query("INSERT INTO indexgoods (img,price,introduction) VALUES('','','')", function (err, data){
              // if(err){
              //   console.log('{err: 1, msg: "数据库出错"}');
              //   response.end();
              // }
              // else{
              //   console.log('{err: 0, msg: "插入数据成功"}');
              //   response.end();
              // }
            });
      }

    // 删除数据
  if(request.query.type=="delete"){
    server.query('delete from indexgoods where index_id="'+request.query.index+'"', function(err, rows, fields) {


    });
  }

  // // 更改数据
  // if(request.query.type=="delete"){
  //   server.query('update tablename set ', function(err, rows, fields) {


  //   });
  // }

  if(request.query.type=="change"){
          var datas =  JSON.parse(request.query.dataVal);
          console.log(datas);
          server.query('update indexgoods set img="'+datas[1]+'",price="'+datas[2]+'",introduction="'+datas[3]+'"WHERE index_id="'+datas[0]+'"', function(err, rows, fields) {

          });
          // sql.updata({
          //       'DatabaseName':'fanlestreet',
          //       'Condition':'UPDATE goods SET name="'+datas[1]+'" ,price="'+datas[2]+'",discount="'+datas[3]+'",message="'+datas[4]+'",map="'+datas[5]+'",src="'+datas[6]+'" WHERE goodsid="'+datas[0]+'"'},function(err,data){
          //             // app.get('/product', function(req, res){
          //             //     res.send(res);
          //             // })
          //       })
       };





  }
  // 刷新数据
  server.query("select * from `indexGoods`",function(err,rs,fields){
      if(err){
        console.log(err);
      }else{
        response.send(rs);
        // console.log(rs);
      }
    })


});




//dc
app.get('/query', function(request, response){

    server.query('select * from okbuy_goods',function(err,result,fields){
    if(err){
      console.log(err);
    }else{
      // var _obj = new message(true, null ,result);
      response.send(result);
    }
  })
});


// jh
app.get('/index', urlencodedParser, function(request, response){

//操作mysql数据库
  server.query("select * from `goods`",function(err,rs,fields){
    if(err){
      console.log(err);
    }else{
      response.send(rs);
      // console.log(rs);
    }
  })
});

app.get("/search",function(request,response){
var sql = "SELECT SQL_CALC_FOUND_ROWS * from okbuy_goods where concat(uid,uname,uprice,discount,oprice) like '%"+(request.query.value ? request.query.value :'')+"%' limit "+((request.query.pagenum-1)*5 ? (request.query.pagenum-1)*5 : 0)+",5; SELECT FOUND_ROWS();"
    console.log(sql)
  server.query(sql,function(err,result){
    response.send(result)
  });
})

app.use(express.static(path.join(__dirname + '/')));
// app.use(express.static(path.join(__dirname+ '/app')));

app.listen(888);



// select SQL_CALC_FOUND_ROWS * from student where username like '%dd%' limit 2, 10;
// SELECT FOUND_ROWS();

// select SQL_CALC_FOUND_ROWS * from student limit 2, 10;
// SELECT FOUND_ROWS();
