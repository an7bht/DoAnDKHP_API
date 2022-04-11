let database = require('../database');

var TaiKhoanSV1={
	postTaKhoanSV:function(MSSV,DiaChi,callback){
			console.log(MSSV)
		return database.query("INSERT INTO `sqlquanlyhocphan`.`sinhvien` (`MSSV`, `DiaChi`) VALUES (?,?) ",[MSSV,DiaChi],callback);
	}
}
 module.exports=TaiKhoanSV1;