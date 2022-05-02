let database = require('../database');

var CongNo={
	getCongNo:function(MSSV, Nam, HocKy,callback){
		return database.query("select monhocphan.TenMHHP, monhocphan.SoTinChi from phieudangkylhp inner join lophocphan on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP  where  phieudangkylhp.MSSV = ? and lophocphan.Nam = ? and lophocphan.HocKy = ? and phieudangkylhp.Nhom='LT' order by monhocphan.TenMHHP",[MSSV, Nam, HocKy],callback);
	}
}
 module.exports=CongNo;