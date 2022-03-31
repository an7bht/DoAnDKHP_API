let database = require('../database');

var CongNo={
	getCongNo:function(MSSV,callback){
		return database.query("select monhocphan.TenMHHP, monhocphan.SoTinChi, lophocphan.Nam, lophocphan.HocKy from phieudangkylhp inner join lophocphan on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP  where  phieudangkylhp.MSSV = ? order by lophocphan.Nam asc, lophocphan.HocKy asc;",[MSSV],callback);
	}
}
 module.exports=CongNo;