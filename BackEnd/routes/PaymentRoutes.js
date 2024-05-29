const express=require('express');
const {GetReceipt,GetReceiptID,PutReceipt,DeleteReceipt, ReceiptPost} = require('../controllers/PaymentControllers');
const router=express.Router()
const {VerifyToken} =require('../middleware/Verify-Token')
router.get('/receipt/Allreceipt',GetReceipt).get('/receipt',VerifyToken,GetReceiptID).post('/receipt/signup',ReceiptPost).put('/receipt/:id',PutReceipt).delete('/receipt/:id',DeleteReceipt)
module.exports=router