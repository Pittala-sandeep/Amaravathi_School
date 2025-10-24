import React, { useState, useEffect } from "react";
import axios from "axios";
import { CarouselEditDelete } from "./carouselED";
import { useNavigate } from "react-router-dom";

const CarouselUpload = () => {
  const [image, setImage] = useState(null);
  const [uploading, setuploading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    setuploading(true);
    setMessage("");

    try {
      await axios.post(`${ADMIN_ORIGIN}/carousel`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      setuploading(false);
      setMessage("Image uploaded successfully!");
      setImage(null);
      navigate("/");
    } catch (err) {
      console.error(err);
      setuploading(false);
      setMessage("Upload failed. Try again.");
    }
  };

  useEffect(() => {
    axios
      .get(`${ADMIN_ORIGIN}/carousel`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Upload Carousel Image
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="form-label block text-sm font-medium text-gray-700 mb-2">
              Choose Image
            </label>
            <input
              type="file"
              name="image"
              className="form-control block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
            <p className="text-red-500 py-2">Max size of 9 MB *</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          {message && (
            <p className="text-center mt-4 font-semibold text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>

      {/* to show all carousel images and can edit and delete */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800 mt-5">
        Delete Or Edit
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <div className="overflow-hidden">
              {item.image.url ? (
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="mx-auto w-full max-h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <CarouselEditDelete item={item} setData={setData} />
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

export default CarouselUpload;
