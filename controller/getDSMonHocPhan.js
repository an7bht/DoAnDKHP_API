let database = require('../database');

var DSMonHocPhan={
	getDSMonHocPhan:function(MSSV,HocKy,Nam,callback){
		return database.query("select monhocphan.MaMHP, monhocphan.TenMHHP, monhocphan.SoTinChi, monhocphan.HocPhanYeuCau, monhocphan.BatBuoc from sinhvien_thuoc_nganh inner join chuongtrinhkhung on sinhvien_thuoc_nganh.MaChuyenNganh  = chuongtrinhkhung.MachuyenNganh inner join lophocphan on lophocphan.MaMHP = chuongtrinhkhung.MaMHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP where sinhvien_thuoc_nganh.MSSV = ? and lophocphan.HocKy = ? and lophocphan.Nam = ? and monhocphan.TenMHHP not in ( select monhocphan.TenMHHP from phieudangkylhp  inner join lophocphan on lophocphan.MaLopHP = phieudangkylhp.MaLopHP inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP where  phieudangkylhp.MSSV = ?) GROUP BY lophocphan.MaMHP;",[MSSV,HocKy,Nam, MSSV],callback);
	}
}
 module.exports=DSMonHocPhan;