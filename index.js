'use strict'
var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname+'/src'));
app.post('/login',function(req,res){
  res.send('123');
})
app.listen(8090);
