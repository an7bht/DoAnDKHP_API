let database = require('../database');

var Diem={
	getAllDiem:function(callback){
		return database.query("Select * from phieudangkylhp",callback);
	},getDiemById:function(MSSV,callback){
		return database.query("SELECT * FROM phieudangkylhp where MSSV = ?",[MSSV],callback);
	}
};
 module.exports=Diem;