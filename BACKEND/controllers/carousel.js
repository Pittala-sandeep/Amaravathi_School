const Carousel = require('../models/carousel')

module.exports.carousel  = async(req, res) => {
    let result = await Carousel.find({}).sort({ createdAt: -1 });
    res.status(200).json(result);
}

module.exports.carouselUpload = async(req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const result = new Carousel({
    image:{
      url,
      filename
    }
  })
  await result.save();
}

module.exports.carouselDelete = async(req, res) => {
  let { id } = req.params;
  await Carousel.findByIdAndDelete(id);
  res.json("Data deleted")
}