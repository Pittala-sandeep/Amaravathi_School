import React, { useState, useEffect } from "react";
import axios from "axios";
import { GalleryEditDelete } from "./galleryED"
import { useNavigate } from "react-router-dom";

const GalleryUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
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
      const res = await axios.post('http://localhost:5000/gallery', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      setFormData({ title: '', description: '', category: '' });
      setImages([]);
      setUploading(false)
      setMessage("Data uploaded")
      navigate('/gallery')
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/gallery")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Upload Gallery Images
        </h2>

        {message && (
            <p className="text-center mt-4 font-semibold text-green-600">
              {message}
            </p>
        )}

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
              Upload Images max-4 <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              className="form-control block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleFileChange}
              accept="image/*"
              name="image"
              multiple
              required
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

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800 mt-5">
        Delete Or Edit
      </h1>

      {/* to show all gallery list and can edit or delete  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <div
              className={`grid gap-2 ${
                item.images.length === 1
                  ? "grid-cols-1"
                  : item.images.length === 2
                  ? "grid-cols-2"
                  : item.images.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
            >
              {item.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`${item.title}-${index}`}
                  className="mx-auto w-full max-h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <h5 className="text-lg font-semibold text-blue-700">
                {item.title}
              </h5>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Category:{" "}
                <span className="italic">{item.category || "N/A"}</span>
              </p>
            </div>
            <GalleryEditDelete item={item} setData={setData} />
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No gallery items found.
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryUpload;
