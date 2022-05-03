var express = require('express');
var router = express.Router();

const SinhVien = require('../controller/getSinhVien');
const Diem = require('../controller/getDiem');
const LichHoc= require('../controller/getLichHoc');
const CTKhung = require('../controller/getCTKhung');
const CongNo = require('../controller/getCongNo');
const TaiKhoanSV = require('../controller/getTaiKhoanSV');
const LopHocPhan = require('../controller/getLopHocPhan');
const DSLopHocPhan = require('../controller/getDSLopHocPhan');
const DSMonHocPhan = require('../controller/getDSMonHocPhan');
const DSLopHocPhanLT = require('../controller/getDSLopHocPhanLT');
const DSLopHocPhanTH = require('../controller/getDSLopHocPhanTH');
const TaiKhoanSV1 = require('../controller/postTaiKhoanSV');
const DKHPTH = require('../controller/postDKHPTH');
const DKHPLT = require('../controller/postDKHPLT');
const UpdateSLSVDKHP = require('../controller/postUpdateSoLuongDKHP');
const DSLopHocPhanDDK = require('../controller/getDSLopHocPhanDDK');
const DeleteLopHocPhanDDk = require('../controller/deleteLHPDDK');
const MonTienQuyet = require('../controller/getMonTienQuyet');
const KiemTraMonTienQuyet = require('../controller/getKiemTraMonTienQuyet');
const KiemTraTrungLichHoc = require('../controller/getKiemTraTrungLichHoc');
const NamHoc = require('../controller/getNamHoc');
const MatKhau = require('../controller/updateMatKhau');
const MonLyThuyet = require('../controller/getTenMonLyThuyet');
const MonThucHanh = require('../controller/getTenMonThucHanh');

router.get('/taikhoansv',function(req,res,next){
    TaiKhoanSV.getAllTaiKhoan(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/taikhoansv/:id?',function(req,res,next){
    TaiKhoanSV.getTaiKHoanByMTK(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/sinhvien',function(req,res,next){
    SinhVien.getAllSinhVien(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/sinhvien/:id?',function(req,res,next){
    SinhVien.getSinhVienById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/namhoc',function(req,res,next){
    NamHoc.getNamHoc(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/laydiem',function(req,res,next){
    Diem.getAllDiem(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//---------lấy điểm theo mssv, năm , học kỳ--------------------
router.get('/laydiem/:mssv?/:nam?/:hocky?',function(req,res,next){
    Diem.getDiemById(
        req.params.mssv, 
        req.params.nam,
        req.params.hocky,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//---------lấy tên môn lý thuyết theo mssv, năm , học kỳ--------------------


//---------lấy tên môn thực hành theo mssv, năm , học kỳ   --------------------
router.get('/laymonth/:mssv?/:nam?/:hocky?',function(req,res,next){
    MonThucHanh.getTenMonThucHanh(
        req.params.mssv, 
        req.params.nam,
        req.params.hocky,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/laylichhoc/:hocky?/:nam?/:mssv?',function(req,res,next){
    LichHoc.getLichHoc( req.params.hocky,req.params.nam,req.params.mssv,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//------------lấy ct khung cho sinh viên---------------------------//
router.get('/layctkhung/:mssv?/:hocky?',function(req,res,next){
    CTKhung.getCTKhung(
        req.params.mssv,
        req.params.hocky,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//------------lấy công nợ cho sinh viên---------------------------//
router.get('/laycongno/:mssv?/:nam?/:hocky?',function(req,res,next){
    CongNo.getCongNo(
        req.params.mssv,
        req.params.nam,
        req.params.hocky,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
// Lấy ds môn học phần cho sinh viên theo hocky, năm:
router.get('/laydsmhp/:mssv?/:hocky?/:nam?',function(req,res,next){
    DSMonHocPhan.getDSMonHocPhan( req.params.mssv,req.params.hocky,req.params.nam,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
// Lấy một Lớp học phần cho sinh viên theo mã lớp học phần:
router.get('/laylhp/:malhp?',function(req,res,next){
    LopHocPhan.getLopHocPhan(req.params.malhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
// Lấy ds Lớp học phần cho sinh viên theo mã môn học phần:
router.get('/laydslhp/:mamhp?',function(req,res,next){
    DSLopHocPhan.getDSLopHocPhan(req.params.mamhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//----------------------ấy ds Lớp học phần lý thuyết --------------------------------
router.get('/laydslhplt/:malhp?',function(req,res,next){
    DSLopHocPhanLT.getDSLopHocPhanLT(req.params.malhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//-------------------- Lấy ds Lớp học phần thực hành ---------------------------------------
router.get('/laydslhpth/:malhp?',function(req,res,next){
    DSLopHocPhanTH.getDSLopHocPhanTH(req.params.malhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
// router.post('/loginsv',function(req,res,next){
//     TaiKhoanSV1.postTaKhoanSV( req.query.MSSV, req.query.DiaChi,function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json({status: true});
//         }
//     });
// });
//---------DS lớp học phần đã đăng ký--------------------------------------------//
router.get('/laydslhpddk/:mssv?/:hocky?/:nam?',function(req,res,next){
    DSLopHocPhanDDK.getDSLopHocPhanDDK( req.params.mssv,req.params.hocky,req.params.nam,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//------------DKHP thực hành cho sinh viên------------------------------------------------------------
router.post('/dkhpth',function(req,res,next){
    DKHPTH.postDKHPTH( req.query.MSSV, req.query.MaLopHP,req.query.Nhom,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json({status: true});
        }
    });
});
//------------DKHP lý thuyết cho sinh viên------------------------------------------------------------
router.post('/dkhplt',function(req,res,next){
    DKHPLT.postDKHPLT( req.query.MSSV, req.query.MaLopHP,req.query.Nhom,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json({status: true});
        }
    });
});
//------------------Update số lượng đã đăngký của lớp học phần------------------------------
router.post('/updatesoluongsvdk',function(req,res,next){
    UpdateSLSVDKHP.postUpdateSoLuongDkhp( req.query.DaDangKy, req.query.MaLopHP,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json({status: true});
        }
    });
});
//---------Hủy lớp hoc phần đã đăng ký----------------------------
router.delete('/deletelhpddk/:mssv?/:malhp?',function(req,res,next){
    DeleteLopHocPhanDDk.deleteLHPDDK( req.params.mssv, req.params.malhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json({status: true});
        }
    });
});
//----------Lấy môn tiên quyết---------------------------------------//
router.get('/laymontienquyet/:malhp?',function(req,res,next){
    MonTienQuyet.getMonTienQuyet(req.params.malhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//----------Kiểm tra môn tiên quyết---------------------------------------//
router.get('/kiemtramontienquyet/:mssv?/:malhp?',function(req,res,next){
    KiemTraMonTienQuyet.getKiemTraMonTienQuyet(req.params.mssv,req.params.malhp,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//---------------Kiểm tra trùng lịch học---------------------------------//
router.get('/kiemtratrunglichhoc/:mssv?/:hocky?/:nam?/:malhp?/:nhom?/',function(req,res,next){
    KiemTraTrungLichHoc.getKiemTraTrungLichHoc(
        req.params.mssv,
        req.params.hocky,
        req.params.nam,
        req.params.malhp,
        req.params.nhom,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//
router.put('/matkhau',function(req,res){
    MatKhau.updateMatKhau( req.query.Pass,req.query.MaTaiKhoan,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json({status: true});
        }
    });
});
module.exports=router;