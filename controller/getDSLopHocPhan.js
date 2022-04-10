let database = require('../database');

var DSLopHocPhan={
	getDSLopHocPhan:function(MaMHP,callback){
		return database.query("select lophocphan.MaLopHP, lophocphan.SiSo, lophocphan.DaDangKy from lophocphan where lophocphan.MaMHP = ?",[MaMHP],callback);
	}
}
 module.exports=DSLopHocPhan;