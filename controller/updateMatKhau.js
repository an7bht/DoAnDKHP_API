let database = require('../database');

var MatKhau={
	updateMatKhau:function(Pass,MaTaiKhoan,callback){
			console.log(MaTaiKhoan, Pass)
		return database.query("UPDATE taikhoansv SET Pass = ? WHERE MaTaiKhoan = ?",[Pass,MaTaiKhoan],callback);
	}
}
 module.exports=MatKhau;