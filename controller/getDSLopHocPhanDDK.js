let database = require('../database');

var DSLopHocPhanDDK={
	getDSLopHocPhanDDK:function(MSSV, HocKy, Nam,callback){
			console.log(MSSV, HocKy, Nam)
		return database.query("select DISTINCT lophocphan.MaLopHP, monhocphan.TenMHHP, phieudangkylhp.Nhom, giangvien.HoTen from phieudangkylhp inner join lophocphan on lophocphan.MalopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP inner join thoigian_phonghoc_giangvien on thoigian_phonghoc_giangvien.MaLopHP = lophocphan.MaLopHP and thoigian_phonghoc_giangvien.MaNhom = phieudangkylhp.Nhom inner join giangvien on thoigian_phonghoc_giangvien.MaGV = giangvien.MaGV where phieudangkylhp.MSSV = ? and lophocphan.HocKy = ? and lophocphan.Nam=?",[MSSV, HocKy, Nam],callback);
	}
}
 module.exports=DSLopHocPhanDDK;