const express=require('express');
const { Change, Login } = require('../controllers/User-Authorization');
const router=express.Router()
router.post('/user/login',Login).post('/user/change',Change)
module.exports=router;