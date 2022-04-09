let database = require('../database');

var LichHoc={
	getLichHoc:function(HocKy, Nam, MSSV,callback){
		return database.query("select lophocphan.MaLopHP, thoigian_phonghoc_giangvien.TietHoc, thoigian_phonghoc_giangvien.NgayHoc, thoigian_phonghoc_giangvien.PhongHoc, phieudangkylhp.Nhom, monhocphan.TenMHHP, giangvien.HoTen from phieudangkylhp inner join lophocphan on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join thoigian_phonghoc_giangvien on thoigian_phonghoc_giangvien.MaLopHP = lophocphan.MaLopHP and thoigian_phonghoc_giangvien.MaNhom= phieudangkylhp.Nhom inner join monhocphan on  monhocphan.MaMHP = lophocphan.MaMHP inner join giangvien on giangvien.MaGV = thoigian_phonghoc_giangvien.MaGV where lophocphan.HocKy = ? and lophocphan.Nam = ? and phieudangkylhp.MSSV = ? order by thoigian_phonghoc_giangvien.NgayHoc;",[HocKy], [Nam], [MSSV],callback);
	}
}
 module.exports=LichHoc;