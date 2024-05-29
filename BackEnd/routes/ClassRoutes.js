const express=require('express');
const {GetClass,GetClassID,PostClass,PutClass,DeleteClass} = require('../controllers/ClassControllers');
const { VerifyToken } = require('../middleware/Verify-Token');
const router=express.Router()
router.get('/class/Allclass',GetClass).get('/class',VerifyToken,GetClassID).post('/class/signup',PostClass).put('/class/:id',PutClass).delete('/class/:id',DeleteClass)
module.exports=router;