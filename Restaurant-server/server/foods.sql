/*
 Navicat Premium Data Transfer

 Source Server         : test_1
 Source Server Type    : MySQL
 Source Server Version : 50549
 Source Host           : localhost:3306
 Source Schema         : foods

 Target Server Type    : MySQL
 Target Server Version : 50549
 File Encoding         : 65001

 Date: 25/02/2020 11:23:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'root', 'root', 'admin');
INSERT INTO `admin` VALUES (2, 'admin', 'admin', 'admin');

-- ----------------------------
-- Table structure for cook
-- ----------------------------
DROP TABLE IF EXISTS `cook`;
CREATE TABLE `cook`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cook
-- ----------------------------
INSERT INTO `cook` VALUES (1, 'root', 'root', 'cook');

-- ----------------------------
-- Table structure for foodmenu
-- ----------------------------
DROP TABLE IF EXISTS `foodmenu`;
CREATE TABLE `foodmenu`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `foodnum` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of foodmenu
-- ----------------------------
INSERT INTO `foodmenu` VALUES (3, '烤茄子', '主菜', '20', 1);
INSERT INTO `foodmenu` VALUES (4, '酸黄瓜', '凉菜', '15', 2);
INSERT INTO `foodmenu` VALUES (5, '糖醋排骨', '主菜', '30', 3);
INSERT INTO `foodmenu` VALUES (6, '西红柿炒蛋', '主菜', '15', 4);
INSERT INTO `foodmenu` VALUES (9, '红烧牛肉', '主菜', '45', 5);
INSERT INTO `foodmenu` VALUES (10, '豆腐皮', '素菜', '10', 6);
INSERT INTO `foodmenu` VALUES (11, '蒜苗炒肉', '荤菜', '12', 7);
INSERT INTO `foodmenu` VALUES (12, '小鱼干', '荤菜', '15', 8);
INSERT INTO `foodmenu` VALUES (13, '豆角', '素菜', '10', 9);
INSERT INTO `foodmenu` VALUES (14, '香菇青菜', '素菜', '10', 10);
INSERT INTO `foodmenu` VALUES (15, '花菜', '素菜', '8', 10);
INSERT INTO `foodmenu` VALUES (16, '大白菜炒肉', '荤菜', '12', 11);
INSERT INTO `foodmenu` VALUES (17, '带鱼', '荤菜', '15', 12);
INSERT INTO `foodmenu` VALUES (18, '酱爆茄子', '素菜', '8', 13);
INSERT INTO `foodmenu` VALUES (19, '酸菜鱼', '荤菜', '28', 14);
INSERT INTO `foodmenu` VALUES (20, '水煮鱼', '荤菜', '28', 15);
INSERT INTO `foodmenu` VALUES (21, '三菌炖土鸡', '荤菜', '28', 16);
INSERT INTO `foodmenu` VALUES (22, '玉米羹', '汤类', '10', 17);
INSERT INTO `foodmenu` VALUES (23, '紫菜蛋汤', '汤类', '12', 18);
INSERT INTO `foodmenu` VALUES (24, '素三鲜汤', '汤类', '12', 19);
INSERT INTO `foodmenu` VALUES (25, '西红柿蛋汤', '汤类', '12', 20);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `num` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodsstock` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '1', '大豆', '15', '635');
INSERT INTO `goods` VALUES (2, '2', '茄子', '20', '500');
INSERT INTO `goods` VALUES (3, '3', '土豆', '18', '800');
INSERT INTO `goods` VALUES (4, '4', '白菜', '10', '700');
INSERT INTO `goods` VALUES (5, '5', '牛肉', '50', '300');
INSERT INTO `goods` VALUES (6, '6', '猪肉', '45', '300');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `mydate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodsstock` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (10, '2020-2-25 10:44:4', '入库', '大豆', '300');
INSERT INTO `message` VALUES (11, '2020-2-25 10:49:52', '入库', '茄子', '300');
INSERT INTO `message` VALUES (12, '2020-2-25 10:50:20', '出库', '茄子', '150');
INSERT INTO `message` VALUES (13, '2020-2-25 10:57:2', '入库', '土豆', '200');
INSERT INTO `message` VALUES (14, '2020-2-25 10:57:44', '出库', '土豆', '200');

-- ----------------------------
-- Table structure for ord
-- ----------------------------
DROP TABLE IF EXISTS `ord`;
CREATE TABLE `ord`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `mydate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordnum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordlist` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordprice` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordtable` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordyear` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ord
-- ----------------------------
INSERT INTO `ord` VALUES (20, '1-1', '李四', '1', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (21, '1-1', '李四', '2', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (22, '3-1', '李四', '3', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (23, '4-1', '李四', '4', '1 2 3', '65', '1', '2020');
INSERT INTO `ord` VALUES (24, '5-1', '李四', '5', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (25, '6-1', '李四', '6', '1 3 3', '80', '1', '2020');
INSERT INTO `ord` VALUES (26, '7-1', '李四', '7', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (27, '8-1', '李四', '8', '1 3 3', '80', '1', '2020');
INSERT INTO `ord` VALUES (28, '9-1', '张三', '9', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (29, '10-1', '张三', '10', '1 2 2', '50', '1', '2020');
INSERT INTO `ord` VALUES (30, '11-1', '张三', '11', '1 1 1', '60', '1', '2020');
INSERT INTO `ord` VALUES (35, '2-25', '张三', '12', '1 3 4', '65', '5', '2020');

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES (1, 'root', 'root', 'person');

-- ----------------------------
-- Table structure for persondatabase
-- ----------------------------
DROP TABLE IF EXISTS `persondatabase`;
CREATE TABLE `persondatabase`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `identitycard` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `worknum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `work` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `entrytime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deptime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `personal` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE INDEX `worknum`(`worknum`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of persondatabase
-- ----------------------------
INSERT INTO `persondatabase` VALUES (1, '张三', '男', 18, '431125199711021258', '9527', '厨师', '2019-12-11', '2020-2-2', '8000', 'good', '已离职');
INSERT INTO `persondatabase` VALUES (2, '李四', '男', 22, '431126199811020016', '9526', '库存管理员', '2020-1-1', '2020-2-6', '4500', '工作认真', '已离职');
INSERT INTO `persondatabase` VALUES (3, '梅花十三', '女', 20, '431126199711020045', '1024', '前台', 'Thu Feb 14 2019 00:00:00 GMT 0800 (中国标准时间)', 'null', '6500', '工作认真', '在职');
INSERT INTO `persondatabase` VALUES (4, '梅花十四', '女', 22, '431126199711020013', '1025', '人事管理员', 'Mon Feb 03 2020 00:00:00 GMT 0800 (中国标准时间)', 'null', '4500', '工作态度可以', '在职');
INSERT INTO `persondatabase` VALUES (5, '梅花15', '男', 23, '431126199711020016', '1027', '仓库管理员', 'Sun Feb 02 2020 00:00:00 GMT 0800 (中国标准时间)', 'null', '4500', '完美', '在职');
INSERT INTO `persondatabase` VALUES (6, '李四', '男', 24, '4312564578952134622', '9998', '厨师', 'Mon Feb 10 2020 00:00:00 GMT 0800 (中国标准时间)', 'null', '5600', '工作态度较好', '在职');
INSERT INTO `persondatabase` VALUES (8, '五王', '男', 52, '230020118991621134', '0001', '前台', 'Tue Feb 06 2018 00:00:00 GMT 0800 (中国标准时间)', 'null', '0056', 'good', '在职');

-- ----------------------------
-- Table structure for recept
-- ----------------------------
DROP TABLE IF EXISTS `recept`;
CREATE TABLE `recept`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of recept
-- ----------------------------
INSERT INTO `recept` VALUES (1, 'root', 'root', 'recept');

-- ----------------------------
-- Table structure for recommendmenu
-- ----------------------------
DROP TABLE IF EXISTS `recommendmenu`;
CREATE TABLE `recommendmenu`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of recommendmenu
-- ----------------------------
INSERT INTO `recommendmenu` VALUES (3, '烤茄子', '主菜', '20', 1);
INSERT INTO `recommendmenu` VALUES (4, '酸黄瓜', '凉菜', '15', 2);
INSERT INTO `recommendmenu` VALUES (9, '红烧牛肉', '主菜', '45', 5);
INSERT INTO `recommendmenu` VALUES (11, '蒜苗炒肉', '荤菜', '12', 7);
INSERT INTO `recommendmenu` VALUES (14, '香菇青菜', '素菜', '10', 10);
INSERT INTO `recommendmenu` VALUES (15, '花菜', '素菜', '8', 10);
INSERT INTO `recommendmenu` VALUES (18, '酱爆茄子', '素菜', '8', 13);
INSERT INTO `recommendmenu` VALUES (21, '三菌炖土鸡', '荤菜', '28', 16);
INSERT INTO `recommendmenu` VALUES (22, '玉米羹', '汤类', '10', 17);
INSERT INTO `recommendmenu` VALUES (25, '西红柿蛋汤', '汤类', '12', 20);

-- ----------------------------
-- Table structure for stock
-- ----------------------------
DROP TABLE IF EXISTS `stock`;
CREATE TABLE `stock`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of stock
-- ----------------------------
INSERT INTO `stock` VALUES (1, 'root', 'root', 'stock');

-- ----------------------------
-- Table structure for tables
-- ----------------------------
DROP TABLE IF EXISTS `tables`;
CREATE TABLE `tables`  (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `tablenum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tables
-- ----------------------------
INSERT INTO `tables` VALUES (1, '0', 'free');
INSERT INTO `tables` VALUES (16, '1', 'free');
INSERT INTO `tables` VALUES (17, '2', 'free');
INSERT INTO `tables` VALUES (18, '3', 'free');
INSERT INTO `tables` VALUES (19, '4', 'free');
INSERT INTO `tables` VALUES (20, '5', 'free');
INSERT INTO `tables` VALUES (21, '6', 'free');
INSERT INTO `tables` VALUES (22, '7', 'free');
INSERT INTO `tables` VALUES (23, '8', 'free');
INSERT INTO `tables` VALUES (24, '9', 'free');
INSERT INTO `tables` VALUES (25, '10', 'free');
INSERT INTO `tables` VALUES (26, '11', 'free');
INSERT INTO `tables` VALUES (27, '12', 'free');
INSERT INTO `tables` VALUES (28, '13', 'free');
INSERT INTO `tables` VALUES (29, '14', 'free');
INSERT INTO `tables` VALUES (30, '15', 'free');
INSERT INTO `tables` VALUES (31, '16', 'free');
INSERT INTO `tables` VALUES (32, '17', 'free');
INSERT INTO `tables` VALUES (33, '18', 'free');

SET FOREIGN_KEY_CHECKS = 1;
