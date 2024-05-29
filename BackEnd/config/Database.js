const mongoose = require('mongoose')
const multer=require('multer')
const path=require('path')
require('dotenv').config()
let jwt = require('jsonwebtoken')
exports.ConnectionDb =  () => {
     mongoose.connect(process.env.mongodb).then(() => console.log(process.env.mongodbconnect))
}
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"backend/public/images")
    },
    filename:(req,file,cb)=>{
        let imagevalidation=file.fieldname + "_"+Date.now() + path.extname(file.originalname)
        cb(null,imagevalidation)
    }
})

exports.Upload=multer({
    storage:storage
}).single("Profile")

