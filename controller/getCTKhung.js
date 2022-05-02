let database = require('../database');

var CTK={
	getCTKhung:function(MSSV, HocKy,callback){
		return database.query("select chuyennganh.TenChuyenNganh,monhocphan.MaMHP,monhocphan.TenMHHP , monhocphan.SoTinChi from sinhvien_thuoc_nganh inner join chuongtrinhkhung on sinhvien_thuoc_nganh.MaChuyenNganh  = chuongtrinhkhung.MachuyenNganh inner join monhocphan on monhocphan.MaMHP  = chuongtrinhkhung.MaMHP inner join chuyennganh on chuyennganh.MaChuyenNganh = sinhvien_thuoc_nganh.MaChuyenNganh where sinhvien_thuoc_nganh.MSSV = ? and chuongtrinhkhung.HocKy = ? order by  monhocphan.TenMHHP",[MSSV, HocKy],callback);
	}
}
 module.exports=CTK;