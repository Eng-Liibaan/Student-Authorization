const UserModel = require('../model/UserModel')
const StudentModel = require('../model/StudentModel')
const ClassModel = require('../model/ClassModel')
const bcrypt = require('bcryptjs')
const PaymentModel = require('../model/PaymentModel')


require('dotenv').config()

const GetAllUser = async (req, res) => {
    let Getuser = await UserModel.find()
    res.status(200).send(Getuser)

}
const GetUser = async (req, res) => {
    let { User } = req.AllData && req.AllData
    let GetUserID = await UserModel.findById(User)
    res.send(GetUserID)
}


const PutUser = async (req, res) => {
    try {

        

        let { Email, UserName, Password, Role, Status } = req.body
        let { id } = req.params;
        let salt = await bcrypt.genSalt(10)

        let Update = await UserModel.findByIdAndUpdate(id, {Email, UserName, Role,Status, Password }, { new: true })
        if(req.file){
            Update.Avator=req.file.filename

        }
        if (Password) {
            Update.Password = await bcrypt.hash(Password, salt)
        }
        await Update.save()

        res.send({
            status: "Success",
            message: "Successfully Update Data User",
            info: Update
        })
    } catch (error) {
        res.send(error.message)
    }
}


const DeleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        let payment = await PaymentModel.find({ Email: id })

        if (payment) {
            await PaymentModel.deleteMany({ _id: payment })
        }
        let StudentData = await StudentModel.findOne({ Email: id })
        if (StudentData) {
            await StudentModel.findByIdAndDelete(StudentData._id)
        }
        let ClassData = await ClassModel.findOne({ Email: id })
        if (ClassData) {
            await ClassModel.findByIdAndDelete(ClassData)
        }

        let Remove = await UserModel.findByIdAndDelete(id)

        if (!Remove) return res.send('')
        res.send({
            status: "Success",
            message: "Successfully Delete Data User",
            info: Remove
        })
    } catch (error) {

    }
}

module.exports = {PutUser, DeleteUser, GetUser, GetAllUser }