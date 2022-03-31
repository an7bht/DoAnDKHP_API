let database = require('../database');

var Diem={
	getAllDiem:function(callback){
		return database.query("Select * from phieudangkylhp",callback);
	},getDiemById:function(id,callback){
		return database.query("Select * from phieudangkylhp where MSSV=?",[id],callback);
	}
};
 module.exports=Diem;