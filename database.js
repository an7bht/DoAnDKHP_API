var mysql = require('mysql');
var connection = mysql.createConnection({

   //  host:process.env.DATABASE_HOST || 'localhost',
   //  user:process.env.DATABASE_USER || 'root',
   //  password:process.env.DATABASE_PASS || '123456',
   //  database:process.env.DATABASE_NAME || 'sqlquanlyhocphan'  
 //------------------ClearDB------------------------------------------------------------//   
    // host:process.env.DATABASE_HOST || 'us-cdbr-east-05.cleardb.net',
    // user:process.env.DATABASE_USER || 'b4e68142b2db41',
    // password:process.env.DATABASE_PASS || '60a01a12',
    // database:process.env.DATABASE_NAME || 'heroku_2b76120d7232e57' 
 //---------------------------JawsDB---------------------------------------------------//   
    host:process.env.DATABASE_HOST || 'dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:process.env.DATABASE_USER || 'ma1oem39jp772diw',
    password:process.env.DATABASE_PASS || 'xgyru0t28effeuar',
    database:process.env.DATABASE_NAME || 'qxg1q9a5sd3r2k7l'

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