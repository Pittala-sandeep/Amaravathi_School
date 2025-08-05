const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const {isAuthenticated, validateCarousel} = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudConfig');
const upload = multer({ storage });
const carouselControllers = require('../controllers/carousel')

router
  .route("/")
  .get(wrapAsync(carouselControllers.carousel))
  .post(
    isAuthenticated,
    validateCarousel,
    upload.single('image'),
    wrapAsync(carouselControllers.carouselUpload)
  )

router
  .delete("/:id",
    isAuthenticated, 
    wrapAsync(carouselControllers.carouselDelete)
  )

module.exports = router;