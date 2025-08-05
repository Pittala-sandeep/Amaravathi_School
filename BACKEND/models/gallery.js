const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
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
    images:[
        {
         url : String,
         filename : String
        }
    ]
})

module.exports = mongoose.model("Gallery", gallerySchema)