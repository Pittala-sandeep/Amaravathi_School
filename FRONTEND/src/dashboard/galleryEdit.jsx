import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const GalleryEdit = () => {
  const location = useLocation();
  const Data = location.state?.galleryData;
  const [formData, setFormData] = useState(Data);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    // Merge with existing files
    setImages((prevImages) => [...prevImages, ...newFiles]);

    // Update previews
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviews]);
  };

  const handleRemoveFile = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);

    for (let i = 0; i < 4; i++) {
      data.append('image', images[i]); 
    }

    setUploading(true)

    try {
      const res = await axios.put(`http://localhost:5000/gallery/edit/${formData._id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      setFormData({ title: '', description: '', category: '' });
      setImages([]);
      setUploading(false)
      navigate('/gallery')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Edit Gallery Images and content
        </h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
              value={formData.description}
              name="description"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Images max-4
            </label>
            <input
              type="file"
              className="form-control block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleFileChange}
              accept="image/*"
              name="image"
              multiple
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`preview-${index}`}
                  className="w-28 h-28 object-cover rounded border"
                />
                {/* Tooltip & Delete Button */}
                <div className="absolute top-0 right-0 p-1">
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="relative z-10 bg-red-600 hover:bg-red-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    x
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Delete
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GalleryEdit;
