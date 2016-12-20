'use strict'
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest:'/upload'})
var buf = new Buffer(5);


app.use(express.static(__dirname+'/src'));
app.use(bodyParser.json());//for application/json
app.use(bodyParser.urlencoded({extended:true}));//for application/x-www-form-urlencoded

//var user = fs.createWriteStream('./src/data.json');
//var vc = fs.createWriteStream('./src/data.json');
// var ddd = fs.readFileSync('./src/js/data.json');
// //console.log(JSON.parse(ddd.toString()).user);
// var aync = fs.readFile('./src/js/data.json',(err,data)=>{
//   var tmp = JSON.parse(data.toString());
//   tmp.push(2344);
//   tmp = JSON.stringify(tmp);
//   fs.writeFile('./src/js/data.json',tmp,(err)=>{
//     console.log(222);
//   })
// });
// var tmp = "";
// aync.on('data',(chunk)=>{
//   tmp+=chunk;
//   tmp = JSON.parse(chunk.toString());
//   tmp.user = 'dddd';
//   tmp.password = '123';
//   console.log(tmp);
//   fs.createWriteStream('./src/data.json').write(tmp);
// })




// ddd.on('data',function(chunk){
//   d_data+=chunk;
// })
// ddd.on('end',function(){
//   console.log(d_data);
// })


app.post('/login',function(req,res){
  var postData = req.body;
  console.log(postData);
  fs.readFile('./src/js/data.json',(err,data)=>{
    var tmp = JSON.parse(data.toString());
    if(tmp[postData.name]){
      res.send('success');
    }else{
      res.send('no user');
    }
  });

})
app.listen(666);
