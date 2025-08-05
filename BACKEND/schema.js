const Joi = require('joi');

module.exports.noticeSchema = Joi.object({
    title : Joi.string().required(),
    content : Joi.string().required(),
    category : Joi.string().allow("", null),
    createdAt : Joi.date()
})

module.exports.gallerySchema = Joi.object({
    title : Joi.string().required(),
    description : Joi.string().required(),
    images : Joi.string().allow("", null),
    category : Joi.string().allow("", null),
    createdAt : Joi.date()
})

module.exports.carouselSchema = Joi.object({
    image : Joi.string().allow("", null),
    createdAt : Joi.date()
})
