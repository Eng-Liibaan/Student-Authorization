const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
   
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: false,
        default: false

    },
    Avator: {
        type: String,
        reqiured: true
    },
    Status: {
        type: String,
        required: false,
        default: "Active",
        enum: ["Active", "Pending", "Blocked"]
    }
})








const UserModel = model('user', UserSchema)

module.exports =  UserModel