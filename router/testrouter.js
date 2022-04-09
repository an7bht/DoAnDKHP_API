var express = require('express');
var router = express.Router();

const SinhVien = require('../controller/getSinhVien');
const Diem = require('../controller/getDiem');
const LichHoc= require('../controller/getLichHoc');
const CTKhung = require('../controller/getCTKhung');
const CongNo = require('../controller/getCongNo');
const TaiKhoanSV = require('../controller/getTaiKhoanSV');

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

module.exports=router;