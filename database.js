// var mysql = require('mysql');
// var connection = mysql.createConnection({

//     host:'localhost',
//     user:'root',
//     password:'123456',
//     database:'sqlquanlyhocphan'  
// });

// module.exports=connection;

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'sqlquanlyhocphan'
});
module.exports=pool;