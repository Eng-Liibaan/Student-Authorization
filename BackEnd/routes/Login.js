const express=require('express');
const { Change, Login } = require('../controllers/User-Authorization');
const router=express.Router()
router.post('/login',Login).post('/change',Change)
module.exports=router;