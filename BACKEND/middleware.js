const { noticeSchema, gallerySchema, carouselSchema } = require("./schema");
const ExpressError = require('./utils/ExpressError');

module.exports.validateNotices = (req, res, next) =>{
    let { error } = noticeSchema.validate(req.body);
    if(error){
        let errmsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400,errmsg)
    } else{
        next();
    }
}

module.exports.validateGallery = (req, res, next) =>{
    let { error } = gallerySchema.validate(req.body);
    if(error){
        let errmsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400,errmsg)
    } else{
        next();
    }
}

module.exports.validateCarousel = (req, res, next) =>{
    let { error } = carouselSchema.validate(req.body);
    if(error){
        let errmsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400,errmsg)
    } else{
        next();
    }
}


module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};