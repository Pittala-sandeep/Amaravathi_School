const Gallery = require('../models/gallery')

module.exports.gallery = async (req, res) => {
    let result = await Gallery.find({}).sort({ createdAt: -1 });
    res.status(200).json(result);
}

module.exports.galleryUpload = async (req, res) => {
    const { title, description, category } = req.body;

    const images = req.files.map(f => ({
        url: f.path,
        filename: f.filename
    }));

    const newGallery = new Gallery({
        title,
        description,
        category,
        images
    });

    await newGallery.save();
    res.json("Image saved")
}

module.exports.galleryEdit = async (req, res) => {
    const { id } = req.params;
    let updatedData = req.body;
    const images = req.files.map(f => ({
        url: f.path,
        filename: f.filename
    }));

    await Gallery.findByIdAndUpdate(id, { ...updatedData, images: images });
    res.json("Data updated")
}

module.exports.galleryDelete = async (req, res) => {
    let { id } = req.params;
    await Gallery.findByIdAndDelete(id);
    res.json("Data deleted")
}