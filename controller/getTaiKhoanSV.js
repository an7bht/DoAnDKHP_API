let database = require('../database');

var TaiKhoanSv={
	getAllTaiKhoan:function(callback){
		return database.query("Select * from taikhoansv",callback);
	},getTaiKHoanByMTK:function(MaTaiKhoan,callback){
		return database.query("Select * from taikhoansv where MaTaiKhoan=?",[MaTaiKhoan],callback);
	}
};
 module.exports=TaiKhoanSv;