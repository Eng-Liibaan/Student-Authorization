const PaymentModel = require('../model/PaymentModel')


const StudentModel = require('../model/StudentModel')
const UserModel = require('../model/UserModel')
const { StudentValidation, EmailValidation } = require('../validation/AllValidation')
const GetStudent = async (req, res) => {
    try {
        let GetStudent = await StudentModel.find().populate('Email')
        res.send(GetStudent)
    } catch (error) {
        res.send(error.message)
    }
}
const GetStudentID = async (req, res) => {
    try {
        const { Student } = req.AllData && req.AllData
        let GetStudentID = await StudentModel.findById(Student)
        res.send(GetStudentID)
    } catch (error) {
        res.send(error.message)
    }
}
const PostStudent = async (req, res) => {
    try {
        let { Name, Gender, Address, Balance, AmountPaid, TotalAmount, Status, Phone, Email } = req.body
        let { error } = StudentValidation({Gender,Address,Name,Phone})
        let { error: email } = EmailValidation({ Email })
        if (email) return res.send(email.message)
        const UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send("Userka lama helin")
        if (error) return res.send(error.message)
        let Insert = new StudentModel({Email, Name, Phone, Gender, Address, Balance, TotalAmount, AmountPaid, Status })
    console.log(Insert)
        const UserExist = await StudentModel.findOne({ Email: UserData._id })
        if (UserExist) return res.send("User Already Exist")
        await StudentModel.findByIdAndUpdate(Insert._id, {
            Email: Insert.Email = UserData._id
        }, { new: true })
        let info = await Insert.save()
        res.send({
            status: "Success",
            message: "Successfully Inserted Data Student",
            info: info
        })

    } catch (error) {
        res.send(error.message)
    }
}
const PutStudent = async (req, res) => {
    try {
        let { Name, Gender, Address, Balance, AmountPaid, TotalAmount, Status, Phone, Email } = req.body

        let { id } = req.params;
        let Update = await StudentModel.findByIdAndUpdate(id, { Name, Gender, Address, Balance, AmountPaid, TotalAmount, Status, Phone })


        await UserModel.findByIdAndUpdate(Update.Email, {
            Email: Email
        }, { new: true })
        res.send({
            status: "Success",
            message: "Successfully Update Data Student",
            info: Update
        })
    } catch (error) {
        res.send(error.message)
    }
}
const DeleteStudent = async (req, res) => {
    try {
        let { id } = req.params;
        let payment = await PaymentModel.find({ Name: id })

        await PaymentModel.deleteMany({ _id: payment })
        let Remove = await StudentModel.findByIdAndDelete(id)
        if (!Remove) return res.send('')
        res.send({
            status: "Success",
            message: "Successfully Update Data Student",
            info: Remove
        })
    } catch (error) {

    }
}
module.exports = { GetStudent, GetStudentID, PostStudent, PutStudent, DeleteStudent }