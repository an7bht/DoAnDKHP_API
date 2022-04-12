var express = require('express');
var router = express.Router();

const SinhVien = require('../controller/getSinhVien');
const Diem = require('../controller/getDiem');
const LichHoc= require('../controller/getLichHoc');
const CTKhung = require('../controller/getCTKhung');
const CongNo = require('../controller/getCongNo');
const TaiKhoanSV = require('../controller/getTaiKhoanSV');
const DSLopHocPhan = require('../controller/getDSLopHocPhan');
const DSMonHocPhan = require('../controller/getDSMonHocPhan');
const DSLopHocPhanLTvsTH = require('../controller/getDSLopHocPhanLTvsTH');
const TaiKhoanSV1 = require('../controller/postTaiKhoanSV');
const DKHP = require('../controller/postDKHP');
const UpdateSLSVDKHP = require('../controller/postUpdateSoLuongDKHP');
const DSLopHocPhanDDK = require('../controller/getDSLopHocPhanDDK');
const DeleteLopHocPhanDDk = require('../controller/postDeleteLHPDDk');

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

router.get('/laydiem/:mssv?',function(req,res,next){
    Diem.getDiemById(req.params.mssv,function(err,rows){
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

router.get('/layctkhung/:mssv?',function(req,res,next){
    CTKhung.getCTKhung(req.params.mssv,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/laycongno/:mssv?',function(req,res,next){
    CongNo.getCongNo(req.params.mssv,function(err,rows){
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
// Lấy ds Lớp học phần lý thuyết vs thực hành cho sinh viên theo mã lớp học phần:
router.get('/laydslhpltvsth/:malhp?',function(req,res,next){
    DSLopHocPhanLTvsTH.getDSLopHocPhanLTvsTH(req.params.malhp,function(err,rows){
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
//------------Dkhp cho sinh viên------------------------------------------------------------
router.post('/dkhp',function(req,res,next){
    DKHP.postDKHP( req.query.MSSV, req.query.MaLopHP,req.query.Nhom,function(err,rows){
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
router.post('/deletelhpddk',function(req,res,next){
    DeleteLopHocPhanDDk.deleteLHPDDK( req.query.MSSV, req.query.MaLopHP,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json({status: true});
        }
    });
});
module.exports=router;