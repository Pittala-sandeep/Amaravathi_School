const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { isAuthenticated, validateGallery } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudConfig');
const upload = multer({ storage });
const controllerGallery = require('../controllers/gallery');

router
    .route("/")
    .get(wrapAsync(controllerGallery.gallery))
    .post(
        isAuthenticated,
        validateGallery,
        upload.array('image', 4),
        wrapAsync(controllerGallery.galleryUpload)
    )


router
    .put("/edit/:id", 
        validateGallery, 
        upload.array('image', 4), 
        wrapAsync(controllerGallery.galleryEdit)
    )

router
    .delete("/:id", 
        isAuthenticated, 
        wrapAsync(controllerGallery.galleryDelete)
    )

module.exports = router;