var mysql = require('mysql');
var connection = mysql.createConnection({

    host:process.env.DATABASE_HOST || 'localhost',
    user:process.env.DATABASE_USER || 'root',
    password:process.env.DATABASE_PASS || '123456',
    database:process.env.DATABASE_NAME || 'sqlquanlyhocphan'  
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