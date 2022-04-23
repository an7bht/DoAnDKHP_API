let database = require('../database');

var NamHoc={
	getNamHoc:function(callback){
		return database.query("select * from nam order by Nam",callback);
	}
}
 module.exports=NamHoc;