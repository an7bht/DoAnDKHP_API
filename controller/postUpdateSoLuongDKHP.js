let database = require('../database');

var UpdateSLSVDKHP={
	postUpdateSoLuongDkhp:function(DaDangKy, MaLopHP,callback){
			console.log(DaDangKy, MaLopHP)
		return database.query("UPDATE `lophocphan` SET `DaDangKy` = ? WHERE (`MaLopHP` = ?)",[DaDangKy, MaLopHP],callback);
	}
}
 module.exports=UpdateSLSVDKHP;