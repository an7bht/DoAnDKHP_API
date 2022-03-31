let database = require('../database');

var CTK={
	getCTKhung:function(MSSV,callback){
		return database.query("select chuyennganh.TenChuyenNganh,monhocphan.MaMHP,monhocphan.TenMHHP , chuongtrinhkhung.HocKy from sinhvien_thuoc_nganh inner join chuongtrinhkhung on sinhvien_thuoc_nganh.MaChuyenNganh  = chuongtrinhkhung.MachuyenNganh inner join monhocphan on monhocphan.MaMHP  = chuongtrinhkhung.MaMHP inner join chuyennganh on chuyennganh.MaChuyenNganh = sinhvien_thuoc_nganh.MaChuyenNganh where sinhvien_thuoc_nganh.MSSV = ? order by  chuongtrinhkhung.HocKy asc",[MSSV],callback);
	}
}
 module.exports=CTK;