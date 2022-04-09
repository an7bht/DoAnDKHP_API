let database = require('../database');

var Diem={
	getAllDiem:function(callback){
		return database.query("Select * from phieudangkylhp",callback);
	},getDiemById:function(MSSV,callback){
		return database.query("SELECT lophocphan.Nam, lophocphan.HocKy, monhocphan.TenMHHP, monhocphan.SoTinChi, phieudangkylhp.DiemTK, phieudangkylhp.DiemGK, phieudangkylhp.DiemTH ,phieudangkylhp.DiemCK FROM phieudangkylhp inner join lophocphan  on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP where MSSV = ? order by Nam",[MSSV],callback);
	}
};
 module.exports=Diem;