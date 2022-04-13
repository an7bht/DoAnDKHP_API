let database = require('../database');

var MonTienQuyet={
	getMonTienQuyet:function( MaLopHP,callback){
		return database.query("select monhocphan.TenMHHP from monhocphan where monhocphan.MaMHP =( select monhocphan.HocPhanYeuCau from lophocphan inner join monhocphan on monhocphan.MaMHP = lophocphan.MaMHP where lophocphan.MaLopHP =?)",[MaLopHP],callback);
	}
}
 module.exports=MonTienQuyet;