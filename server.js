var express = require('express');
var bodyparser = require('body-parser');
  
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var connection = require('./database');
var routes = require('./router/testrouter');

app.use('/test',routes);
//var PORT = process.env.PORT || 3000;
var server = app.listen(process.env.PORT || 3000,()=> {
  console.log('Server listening on port ' + server.address().port);
});
module.exports = app;