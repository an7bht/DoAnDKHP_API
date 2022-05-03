let database = require('../database');

var TenMonThucHanh={
	getTenMonThucHanh:function(MSSV,Nam, HocKy,callback){
		return database.query("select monhocphan.TenMHHP from phieudangkylhp inner join lophocphan on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP  where  phieudangkylhp.MSSV =? and lophocphan.Nam =? and lophocphan.hocky=? and phieudangkylhp.Nhom !='LT'",[MSSV,Nam, HocKy],callback);
	}
}
 module.exports=TenMonThucHanh;