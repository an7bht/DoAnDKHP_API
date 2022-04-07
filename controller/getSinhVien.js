let database = require('../database');

var SinhVien={
	getAllSinhVien:function(callback){
		return database.query("Select * from sinhvien",callback);
	},
	getSinhVienById:function(id,callback){
		return database.query("select * from sinhvien where MSSV=?",[id],callback);
	},
	deleteSV:function(id,callback){
		return database.query("delete from sinhvien where MSSV=?",[id],callback);
	}
};
module.exports=SinhVien;