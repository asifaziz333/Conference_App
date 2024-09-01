const auth=require('../controllers/Admincontroller');
const express = require('express');
const authMiddleware = require('../Middleware/Auth-Middleware');
const authAdmin=require('../Middleware/Admin-Middleware')
const router = express.Router();

// router.route('/conference').post(auth.AdminConfrenceForm);
router.route('/conference').post(authMiddleware,authAdmin,auth.AdminConfrenceForm);
router.route('/conferences').get(authMiddleware,authAdmin,auth.getConfrences);
//router.post('/conference',authMiddleware,auth.AdminConfrenceForm)
// router.get('/conferences',authMiddleware,authAdmin,auth.getConfrences);
module.exports=router