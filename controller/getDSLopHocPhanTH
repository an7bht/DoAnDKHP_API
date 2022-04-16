let database = require('../database');

var DSLopHocPhanTH={
	getDSLopHocPhanTH:function(MaLopHP,callback){
		return database.query("select thoigian_phonghoc_giangvien.*, giangvien.HoTen from thoigian_phonghoc_giangvien inner join giangvien on giangvien.MaGV = thoigian_phonghoc_giangvien.MaGV where thoigian_phonghoc_giangvien.MaLopHP = ?  and thoigian_phonghoc_giangvien.MaNhom !='LT'",[MaLopHP],callback);
	}
}
 module.exports=DSLopHocPhanTH;