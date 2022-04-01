-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: sqlquanlyhocphan
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chuongtrinhkhung`
--

DROP TABLE IF EXISTS `chuongtrinhkhung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuongtrinhkhung` (
  `MachuyenNganh` varchar(10) NOT NULL,
  `MaMHP` varchar(10) NOT NULL,
  `HocKy` int DEFAULT NULL,
  PRIMARY KEY (`MachuyenNganh`,`MaMHP`),
  KEY `FK_ChuongTrinhKhung_MonHoc` (`MaMHP`),
  CONSTRAINT `FK_ChuongTrinhKhung_ChuyenNganh1` FOREIGN KEY (`MachuyenNganh`) REFERENCES `chuyennganh` (`MaChuyenNganh`),
  CONSTRAINT `FK_ChuongTrinhKhung_MonHoc` FOREIGN KEY (`MaMHP`) REFERENCES `monhocphan` (`MaMHP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chuyennganh`
--

DROP TABLE IF EXISTS `chuyennganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuyennganh` (
  `MaChuyenNganh` varchar(10) NOT NULL,
  `TenChuyenNganh` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MaKhoa` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`MaChuyenNganh`),
  KEY `FK_ChuyenNganh_Khoa` (`MaKhoa`),
  CONSTRAINT `FK_ChuyenNganh_Khoa` FOREIGN KEY (`MaKhoa`) REFERENCES `khoa` (`MaKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `giangvien`
--

DROP TABLE IF EXISTS `giangvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giangvien` (
  `MaGV` varchar(10) NOT NULL,
  `HoTen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DiaChi` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `GioiTinh` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `SoDt` varchar(10) DEFAULT NULL,
  `Makhoa` varchar(10) NOT NULL,
  PRIMARY KEY (`MaGV`),
  KEY `FK_GiangVien_Khoa` (`Makhoa`),
  CONSTRAINT `FK_GiangVien_Khoa` FOREIGN KEY (`Makhoa`) REFERENCES `khoa` (`MaKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hocky`
--

DROP TABLE IF EXISTS `hocky`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hocky` (
  `HocKy` int NOT NULL,
  PRIMARY KEY (`HocKy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `khoa`
--

DROP TABLE IF EXISTS `khoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khoa` (
  `MaKhoa` varchar(10) NOT NULL,
  `TenKhoa` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`MaKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lopbienche`
--

DROP TABLE IF EXISTS `lopbienche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lopbienche` (
  `MaLopBienChe` varchar(10) NOT NULL,
  `TenLop` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MaGV` varchar(10) NOT NULL,
  `KhoaHoc` int NOT NULL,
  `SiSo` int NOT NULL,
  PRIMARY KEY (`MaLopBienChe`),
  KEY `FK_LopBienChe_GiangVien` (`MaGV`),
  CONSTRAINT `FK_LopBienChe_GiangVien` FOREIGN KEY (`MaGV`) REFERENCES `giangvien` (`MaGV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lophocphan`
--

DROP TABLE IF EXISTS `lophocphan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lophocphan` (
  `MaLopHP` varchar(10) NOT NULL,
  `SiSo` int DEFAULT NULL,
  `MaMHP` varchar(10) DEFAULT NULL,
  `Nam` varchar(10) DEFAULT NULL,
  `HocKy` int DEFAULT NULL,
  `DaDangKy` int DEFAULT NULL,
  PRIMARY KEY (`MaLopHP`),
  KEY `FK_LopHocPhan_HocKy` (`HocKy`),
  KEY `FK_LopHocPhan_MonHoc` (`MaMHP`),
  KEY `FK_LopHocPhan_Nam` (`Nam`),
  CONSTRAINT `FK_LopHocPhan_HocKy` FOREIGN KEY (`HocKy`) REFERENCES `hocky` (`HocKy`),
  CONSTRAINT `FK_LopHocPhan_MonHoc` FOREIGN KEY (`MaMHP`) REFERENCES `monhocphan` (`MaMHP`),
  CONSTRAINT `FK_LopHocPhan_Nam` FOREIGN KEY (`Nam`) REFERENCES `nam` (`Nam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `monhocphan`
--

DROP TABLE IF EXISTS `monhocphan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monhocphan` (
  `MaMHP` varchar(10) NOT NULL,
  `TenMHHP` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `SoTinChi` int DEFAULT NULL,
  `HinhThucThi` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `BatBuoc` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MaKhoa` varchar(10) DEFAULT NULL,
  `HocPhanYeuCau` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`MaMHP`),
  KEY `FK_MonHoc_Khoa` (`MaKhoa`),
  CONSTRAINT `FK_MonHoc_Khoa` FOREIGN KEY (`MaKhoa`) REFERENCES `khoa` (`MaKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nam`
--

DROP TABLE IF EXISTS `nam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nam` (
  `Nam` varchar(10) NOT NULL,
  PRIMARY KEY (`Nam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nhanvienphongdaotao`
--

DROP TABLE IF EXISTS `nhanvienphongdaotao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvienphongdaotao` (
  `MaNV` varchar(10) NOT NULL,
  `HoTen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DiaChi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `SoDT` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `GioiTinh` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MaKhoa` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`MaNV`),
  KEY `FK_NhanVienPhongDaoTao_Khoa` (`MaKhoa`),
  CONSTRAINT `FK_NhanVienPhongDaoTao_Khoa` FOREIGN KEY (`MaKhoa`) REFERENCES `khoa` (`MaKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nhom`
--

DROP TABLE IF EXISTS `nhom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhom` (
  `MaNhom` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`MaNhom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `phieudangkylhp`
--

DROP TABLE IF EXISTS `phieudangkylhp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieudangkylhp` (
  `MSSV` varchar(10) NOT NULL,
  `MaLopHP` varchar(10) NOT NULL,
  `Nhom` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `DiemTK` float DEFAULT NULL,
  `DiemGK` float DEFAULT NULL,
  `DiemCK` float DEFAULT NULL,
  `DiemTH` float DEFAULT NULL,
  PRIMARY KEY (`MSSV`,`MaLopHP`,`Nhom`),
  KEY `FK_PhieuDangKyLHP_LopHocPhan` (`MaLopHP`),
  KEY `FK_PhieuDangKyLHP_Nhom` (`Nhom`),
  CONSTRAINT `FK_PhieuDangKyLHP_LopHocPhan` FOREIGN KEY (`MaLopHP`) REFERENCES `lophocphan` (`MaLopHP`),
  CONSTRAINT `FK_PhieuDangKyLHP_Nhom` FOREIGN KEY (`Nhom`) REFERENCES `nhom` (`MaNhom`),
  CONSTRAINT `FK_PhieuDangKyLHP_SinhVien` FOREIGN KEY (`MSSV`) REFERENCES `sinhvien` (`MSSV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `phonghoc`
--

DROP TABLE IF EXISTS `phonghoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phonghoc` (
  `PhongHoc` varchar(10) NOT NULL,
  PRIMARY KEY (`PhongHoc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sinhvien`
--

DROP TABLE IF EXISTS `sinhvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sinhvien` (
  `MSSV` varchar(10) NOT NULL,
  `DiaChi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `GioiTinh` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `HoTen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `SoDT` varchar(10) DEFAULT NULL,
  `KhoaHoc` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`MSSV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sinhvien_thuoc_lop_bien_che`
--

DROP TABLE IF EXISTS `sinhvien_thuoc_lop_bien_che`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sinhvien_thuoc_lop_bien_che` (
  `MSSV` varchar(10) NOT NULL,
  `MaLopBienChe` varchar(10) NOT NULL,
  PRIMARY KEY (`MSSV`),
  KEY `FK_DS_SinhVien_Trong_Lop_Bien_Che_LopBienChe1` (`MaLopBienChe`),
  CONSTRAINT `FK_DS_SinhVien_Trong_Lop_Bien_Che_LopBienChe1` FOREIGN KEY (`MaLopBienChe`) REFERENCES `lopbienche` (`MaLopBienChe`),
  CONSTRAINT `FK_DS_SinhVien_Trong_Lop_Bien_Che_SinhVien` FOREIGN KEY (`MSSV`) REFERENCES `sinhvien` (`MSSV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sinhvien_thuoc_nganh`
--

DROP TABLE IF EXISTS `sinhvien_thuoc_nganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sinhvien_thuoc_nganh` (
  `MSSV` varchar(10) NOT NULL,
  `MaChuyenNganh` varchar(10) NOT NULL,
  PRIMARY KEY (`MSSV`),
  KEY `FK_DS_SinhVien_Theo_Nganh_ChuyenNganh` (`MaChuyenNganh`),
  CONSTRAINT `FK_DS_SinhVien_Theo_Nganh_ChuyenNganh` FOREIGN KEY (`MaChuyenNganh`) REFERENCES `chuyennganh` (`MaChuyenNganh`),
  CONSTRAINT `FK_DS_SinhVien_Theo_Nganh_SinhVien1` FOREIGN KEY (`MSSV`) REFERENCES `sinhvien` (`MSSV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sysdiagrams`
--

DROP TABLE IF EXISTS `sysdiagrams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sysdiagrams` (
  `name` varchar(160) NOT NULL,
  `principal_id` int NOT NULL,
  `diagram_id` int NOT NULL,
  `version` int DEFAULT NULL,
  `definition` longblob,
  PRIMARY KEY (`diagram_id`),
  UNIQUE KEY `UK_principal_name` (`principal_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `taikhoannv`
--

DROP TABLE IF EXISTS `taikhoannv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoannv` (
  `MaTaiKhoan` varchar(10) NOT NULL,
  `Pass` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`MaTaiKhoan`),
  CONSTRAINT `FK_TaiKhoanNV_NhanVienPhongDaoTao` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `nhanvienphongdaotao` (`MaNV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `taikhoansv`
--

DROP TABLE IF EXISTS `taikhoansv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoansv` (
  `MaTaiKhoan` varchar(10) NOT NULL,
  `Pass` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`MaTaiKhoan`),
  CONSTRAINT `FK_TaiKhoan_SinhVien` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `sinhvien` (`MSSV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `thoigian_phonghoc_giangvien`
--

DROP TABLE IF EXISTS `thoigian_phonghoc_giangvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thoigian_phonghoc_giangvien` (
  `MaNhom` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `MaLopHP` varchar(10) NOT NULL,
  `TietHoc` varchar(10) DEFAULT NULL,
  `NgayHoc` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PhongHoc` varchar(10) DEFAULT NULL,
  `MaGV` varchar(10) DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  PRIMARY KEY (`MaNhom`,`MaLopHP`),
  KEY `FK_ThoiGian_PhongHoc_GiangVien_GiangVien` (`MaGV`),
  KEY `FK_ThoiGian_PhongHoc_LopHocPhan` (`MaLopHP`),
  KEY `FK_ThoiGian_PhongHoc_PhongHoc` (`PhongHoc`),
  CONSTRAINT `FK_ThoiGian_PhongHoc_GiangVien_GiangVien` FOREIGN KEY (`MaGV`) REFERENCES `giangvien` (`MaGV`),
  CONSTRAINT `FK_ThoiGian_PhongHoc_LopHocPhan` FOREIGN KEY (`MaLopHP`) REFERENCES `lophocphan` (`MaLopHP`),
  CONSTRAINT `FK_ThoiGian_PhongHoc_Nhom` FOREIGN KEY (`MaNhom`) REFERENCES `nhom` (`MaNhom`),
  CONSTRAINT `FK_ThoiGian_PhongHoc_PhongHoc` FOREIGN KEY (`PhongHoc`) REFERENCES `phonghoc` (`PhongHoc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-01 15:16:28
