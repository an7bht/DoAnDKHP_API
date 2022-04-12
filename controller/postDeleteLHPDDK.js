let database = require('../database');

var DeleteLopHocPhanDDk={
	deleteLHPDDK:function(MSSV, MaLopHP,callback){
			console.log(MSSV, MaLopHP)
		return database.query("DELETE FROM `phieudangkylhp` WHERE (`MSSV` = ?) and (`MaLopHP` = ?)",[MSSV, MaLopHP],callback);
	}
}
 module.exports=DeleteLopHocPhanDDk;