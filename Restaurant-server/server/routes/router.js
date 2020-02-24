const router = require('koa-router')();

//引入路由
const loginRouter = require('./login.js');  //登录的路由
const orderRouter = require('./order.js');  //订餐的路由
const tableRouter = require('./table.js');	//餐桌管理的路由
const personRouter = require('./person.js');	//人事管理的路由
const goodsRouter = require('./goods.js');	//库存管理的路由
const foodmenuRouter = require('./foodmenu.js');	//菜单管理的路游


router.use('/api',loginRouter);
router.use('/api',orderRouter);
router.use('/api',tableRouter);
router.use('/api',personRouter);
router.use('/api',goodsRouter);
router.use('/api',foodmenuRouter);

module.exports=router.routes();