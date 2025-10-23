const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
})

module.exports = mongoose.model("Notice", noticeSchema);