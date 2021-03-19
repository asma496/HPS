const mongoose = require('mongoose');

const RegisSchema = mongoose.Schema({
    MRNo: {
        type: Number,
        // required: [true, ""]
    },
    TokenNo: {
        type: Number,
        // required: [true, "Token is required"]
    },
    Name: {
        type: String,
        // required: [true, "Name is required"]
    },
    FatherOrHusband: {
        type: String,
        // required: [true, "FatherOrHusband is required"]
    },
    DOB: {
        type: Date,
         default: Date.now
    },
    Gender: {
        type: String,
        // required: [true, "gender is required"]
    },
    Religion: {
        type: String,
        // required: [true, "religion is required"]
    },
    Help: {
        type: String,
        // required: [true, "help type is required"]
    },
    District: {
        type: String,
        // required: [true, " District is required"]
    },
    CNIC: {
        type: Number,
        // required: [true, "CNIC is required"]
    },
    PhoneNo: {
        type: Number,
        // required: [true, "CNIC is required"]
    },
    Mobile: {
        type: String,
        // required: [true, "PhoneNo is required"]
    },
    OffPhone: {
        type: String,
        // required: [true, "CNIC is required"]
    },
    RefBy: {
        type: String,
        // required: [true, "OffPhone is required"]
    },
    Remarks: {
        type: String,
        // required: [true, "CNIC is required"]
    },
    IsRejected: {
        // required: [false, "Remarks is required"]
    },
    IsZakat: {
        type: String,
        // required: [true, "IsZakat is required"]
    },
    IsPAFEmp: {
        // required: [false, "IsPAFEmp is required"]
    },
    RefBy: {
        type: String,
        // required: [true, "RefBy is required"]
    },
    MonthlyConsLimit: {
        type: Number,
        // required: [true, "MonthlyConsLimit is required"]
    },
    NOY: {
        type: String,
        // required: [true, "NOY is required"]
    },
    EmpId: {
        type: Number,
        // required: [true, "EmpId is required"]
    },
    IsStaff: {
        type: String,
        // required: [true, "IsStaff is required"]
    },
    CreateUser: '',
    ModifyUser:'',
    ModifyDate: {
        type: String,
        // required: [true, "ModifyDate is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const Registration = mongoose.model('Registration', RegisSchema)
module.exports = Registration