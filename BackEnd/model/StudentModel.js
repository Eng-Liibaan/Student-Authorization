const mongoose = require('mongoose')
const { Schema, model } = mongoose

const StudentSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    Phone:{
        type:Number,
        required:true
    },
    Gender: {
        type: String,
        required: true,
        enum:["Female","Male"]
    },
    Address: {
        type: String,
        required: true,

    },
    Balance:{
        type:Number,
        required:false,
        default:"100"
    },
    AmountPaid:{
        type:Number,
        required:false,
        default:"0"
    },
    TotalAmount:{
        type:Number,
        required:false,
        default:"100"
    },
    Status: {
        type: String,
        required: false,
        default: "UnPaid",
        enum: ["UnPaid", "FullPaid", "PercialPaid"]
    }
},{timestamps:true})



const StudentModel = model('student',StudentSchema)

module.exports =  StudentModel