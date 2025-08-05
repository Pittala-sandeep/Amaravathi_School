const mongoose = require('mongoose');
const Carousel = require('../models/carousel');
const Gallery = require('../models/gallery');
const Notice = require('../models/notice');
const Admin = require('../models/Admin')
const slides = require('./carousel');
const gallery = require('./gallery');
const notice = require('./notice')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amaravathiSchool');
  console.log("connected successfully")
}

const carouselData = async () => {
    await Carousel.deleteMany({})
    await Carousel.insertMany(slides.data);
    console.log("slides images added")
}

carouselData();

const galleryData = async () => {
    await Gallery.deleteMany({})
    await Gallery.insertMany(gallery.data);
    console.log("Gallery images added")
}

galleryData();

const noticeData = async () => {
    await Notice.deleteMany({})
    await Notice.insertMany(notice.data);
    console.log("Notice images added")
}

noticeData();