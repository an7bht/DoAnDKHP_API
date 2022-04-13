let database = require('../database');

var KiemTraMonTienQuyet={
	getKiemTraMonTienQuyet:function(MSSV,MaLopHP,callback){
		return database.query("select  DISTINCT  monhocphan.TenMHHP from phieudangkylhp inner join lophocphan on lophocphan.MalopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP inner join thoigian_phonghoc_giangvien on thoigian_phonghoc_giangvien.MaLopHP = lophocphan.MaLopHP inner join giangvien on thoigian_phonghoc_giangvien.MaGV = giangvien.MaGV where phieudangkylhp.MSSV = ? and monhocphan.TenMHHP In ( select monhocphan.TenMHHP from monhocphan where monhocphan.MaMHP =( select monhocphan.HocPhanYeuCau from lophocphan inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP where lophocphan.MaLopHP =?))",[MSSV,MaLopHP],callback);
	}
}
 module.exports=KiemTraMonTienQuyet;