let database = require('../database');

var DKHP={
	postDKHP:function(MSSV,MaLopHP,Nhom,callback){
			console.log(MSSV, MaLopHP, Nhom)
		return database.query("INSERT INTO `sqlquanlyhocphan`.`phieudangkylhp` (`MSSV`, `MaLopHP`, `Nhom`) VALUES (?, ?, ?)",[MSSV,MaLopHP,Nhom],callback);
	}
}
 module.exports=DKHP;