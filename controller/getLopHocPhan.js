let database = require('../database');

var LopHocPhan={
	getLopHocPhan:function(MaLopHP,callback){
		return database.query("select lophocphan.* from lophocphan where lophocphan.MaLopHP =?",[MaLopHP],callback);
	}
}
 module.exports=LopHocPhan;