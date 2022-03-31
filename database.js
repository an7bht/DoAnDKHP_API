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
  host            : 'dkhpiuh.herokuapp.com',
  user            : 'root',
  password        : '123456',
  database        : 'sqlquanlyhocphan'
});
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });