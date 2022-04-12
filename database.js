var mysql = require('mysql');
var connection = mysql.createConnection({

    host:process.env.DATABASE_HOST || 'localhost',
    user:process.env.DATABASE_USER || 'root',
    password:process.env.DATABASE_PASS || '123456',
    database:process.env.DATABASE_NAME || 'sqlquanlyhocphan'  
    // host:process.env.DATABASE_HOST || 'us-cdbr-east-05.cleardb.net',
    // user:process.env.DATABASE_USER || 'b4e68142b2db41',
    // password:process.env.DATABASE_PASS || '60a01a12',
    // database:process.env.DATABASE_NAME || 'heroku_2b76120d7232e57' 
});

module.exports=connection;

// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '123456',
//   database        : 'sqlquanlyhocphan'
// });
// module.exports=pool;