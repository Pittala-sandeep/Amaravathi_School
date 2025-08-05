const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
    image:{
        url : String,
        filename : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model("Carousel", carouselSchema);