const express=require('express')
const router=express.Router();
const auth=require('../controllers/Usercontroller');
const authMiddleware = require('../Middleware/Auth-Middleware');

router.route('/userconference').post(auth.Userform);
router.route('/conferences').get(auth.getConfrences);
router.route('/login').post(auth.Login);
router.route('/feedback').post(auth.feedbackbox)
module.exports=router