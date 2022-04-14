let database = require('../database');

var KiemTraTrungLichHoc={
	getKiemTraTrungLichHoc:function(MSSV,HocKy,Nam,MaLopHP,MaNhom,callback){
		return database.query("select DISTINCT lophocphan.MaLopHP , thoigian_phonghoc_giangvien.MaNhom, thoigian_phonghoc_giangvien.NgayHoc, thoigian_phonghoc_giangvien.TietHoc from phieudangkylhp  inner join lophocphan on lophocphan.MalopHP = phieudangkylhp.MaLopHP inner join thoigian_phonghoc_giangvien on thoigian_phonghoc_giangvien.MaLopHP = lophocphan.MaLopHP and thoigian_phonghoc_giangvien.MaNhom = phieudangkylhp.Nhom where phieudangkylhp.MSSV = ? and lophocphan.HocKy = ? and lophocphan.Nam=? and thoigian_phonghoc_giangvien.NgayHoc = (select thoigian_phonghoc_giangvien.NgayHoc from thoigian_phonghoc_giangvien where thoigian_phonghoc_giangvien.MaLopHP=? and thoigian_phonghoc_giangvien.MaNhom=?) and thoigian_phonghoc_giangvien.TietHoc = (select thoigian_phonghoc_giangvien.TietHoc from thoigian_phonghoc_giangvien where thoigian_phonghoc_giangvien.MaLopHP=? and thoigian_phonghoc_giangvien.MaNhom=?)",
        [MSSV,HocKy,Nam,MaLopHP,MaNhom,MaLopHP,MaNhom],callback);
	}
}
 module.exports=KiemTraTrungLichHoc;