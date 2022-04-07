let database = require('../database');

var Diem={
	getAllDiem:function(callback){
		return database.query("Select * from phieudangkylhp",callback);
	},getDiemById:function(id,callback){
		return database.query("select lophocphan.Nam, lophocphan.hocky, monhocphan.TenMHHP,monhocphan.SoTinChi, phieudangkylhp.DiemTK, phieudangkylhp.DiemGK, phieudangkylhp.DiemTH ,phieudangkylhp.DiemCK from phieudangkylhp inner join lophocphan on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP where phieudangkylhp.MSSV = ? and phieudangkylhp.Nhom ='LT' order by lophocphan.Nam asc , lophocphan.HocKy asc",[id],callback);
	}
};
 module.exports=Diem;