const { ReceiptValidation, NameValidation, ClassNameValidation, EmailValidation } = require('../validation/AllValidation')
const StudentModel = require('../model/StudentModel')
const UserModel = require('../model/UserModel')
const ClassModel = require('../model/ClassModel')


const PaymentModel = require('../model/PaymentModel')

const GetReceipt = async (req, res) => {
    try {
        let GetReceipt = await PaymentModel.find().populate("Email").populate("Name").populate("ClassName")
        res.send(GetReceipt)
    } catch (error) {
        res.send(error.message)
    }
}
const GetReceiptID = async (req, res) => {
    try {
        let { Payment } = req.AllData && req.AllData;
        let payment = await PaymentModel.findById(Payment)
        res.send(payment)
    } catch (error) {
        res.send(error.message)
    }
}
const ReceiptPost = async (req, res) => {

    try {
        let { Name, Email, ClassName, ReceiptAmount } = req.body;
        let PayMoney=parseInt(ReceiptAmount)

        let { error: email } = EmailValidation({ Email })
        if (email) return res.send(email.message)
        let UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send("User not found")
        let { error: name } = NameValidation({ Name })
        if (name) return res.send(name.message)
        let StudentData = await StudentModel.findOne({ Name: Name })
        if (!StudentData) return res.send("Student not found")
        let { error: clas } = ClassNameValidation({ ClassName })
        if (clas) return res.send(clas.message)
        let ClassData = await ClassModel.findOne({ ClassName: ClassName })
        if (!ClassData) return res.send("Class not found")
        let Insert = new PaymentModel({ Name, Email, ReceiptAmount, ClassName })
        let { error } = ReceiptValidation(req.body)
        if (error) return res.send(error.message)
        let CurrencyStatus = ""
        let TotalAmountPaid = parseFloat(StudentData.AmountPaid + PayMoney)
        let CurrencyBalance = StudentData.TotalAmount - TotalAmountPaid

        if (PayMoney === 0) {
            res.send('Please Enter Digit Greater than 0')
            return
        }
        if (StudentData.Balance === 0) {
            res.send(`Lacagta waad wada shubtay  haragagu waa $ ${StudentData.Balance} `)
            return
        }
        if (TotalAmountPaid > StudentData.TotalAmount) {
            res.send(`Lacagta laga rabo waa ${StudentData.Balance}`)
            return
        }


        if (TotalAmountPaid < StudentData.TotalAmount) {
            CurrencyStatus = "PercialPaid"
        }
        if (CurrencyBalance === 0) {
            CurrencyStatus = "FullPaid"
        }


        await PaymentModel.findByIdAndUpdate(Insert._id, {
            Email: Insert.Email = UserData._id,
            Name: Insert.Name = StudentData._id,
            ClassName: Insert.ClassName = ClassData._id,

        }, { new: true })

        await Insert.save()




        await StudentModel.findByIdAndUpdate(StudentData._id, {
            AmountPaid: TotalAmountPaid,
            Balance: CurrencyBalance,
            Status: CurrencyStatus
        }, { new: true })





        res.send({
            status: "Success",
            message: "Successfully Inserted Data Receipt",
            info: Insert
        })


    } catch (error) {
        res.send(error.message)

    }

}
const PutReceipt = async (req, res) => {
    try {
        let { id } = req.params
        let { Name, Email, ClassName, ReceiptAmount } = req.body;
        let { error } = ReceiptValidation(req.body)
        if (error) return res.send(error.message)

        let StudentData = await StudentModel.findOne({ _id: id })
        let ClassData = await ClassModel.findOne({ Email: StudentData.Email })
        let UserData = await UserModel.findOne({ _id: StudentData.Email })




        let TotalAmountPaid = parseFloat(StudentData.Balance + ReceiptAmount)
        let CurrencyBalance = StudentData.TotalAmount + ReceiptAmount
        if (ReceiptAmount === 0) {
            res.send('Please Enter Digit Greater than 0')
            return
        }



        await StudentModel.findByIdAndUpdate(StudentData._id, {
            Balance: TotalAmountPaid,
            TotalAmount: CurrencyBalance,
            Status: "UnPaid",
            Name: Name
        }, { new: true })

        await UserModel.findByIdAndUpdate(UserData._id, {
            Email: Email
        }, { new: true })

        await ClassModel.findByIdAndUpdate(ClassData._id, {
            ClassName: ClassName
        }, { new: true })


        res.send({
            status: "Success",
            message: "Successfully Inserted and Update Data Receipt",
        })


    } catch (error) {
        res.send(error.message)

    }

}
const DeleteReceipt = async (req, res) => {
    try {
        let { id } = req.params;
        let payment = await PaymentModel.find({ Name: id })
        let Remove = await PaymentModel.deleteMany({ _id: payment })
        if (!Remove) return res.send('')
        res.send({
            status: "Success",
            message: "Successfully Update Data Receipt",
            info: Remove
        })
    } catch (error) {

    }
}
module.exports = { GetReceipt, GetReceiptID, ReceiptPost, PutReceipt, DeleteReceipt }