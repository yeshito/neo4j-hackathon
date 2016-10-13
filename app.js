"use strict"
const express = require('express');
const ejs = require('ejs');
var app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.set("view engine", "ejs");

app.get('', function(request, response){
  app.render()
})

app.listen(PORT, function(){
  console.log(`Listening on ${PORT} port`)
})
