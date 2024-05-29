const mongoose=require('mongoose')

const PaymentSchema=new mongoose.Schema({
    ReceiptAmount:{
        type:Number,
        required:true
    },
    Name:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'student'
    },
    ClassName:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'class'
    },
    Email:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
})




const PaymentModel=mongoose.model('payment',PaymentSchema)


module.exports=PaymentModel