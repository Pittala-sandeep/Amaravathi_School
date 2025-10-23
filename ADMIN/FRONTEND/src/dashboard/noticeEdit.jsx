import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const NoticeEdit = () => {
  const location = useLocation();
  const Data = location.state?.noticeData;
  const [formData, setFormData] = useState(Data);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const updatePayload = {
        title: formData.title,
        content: formData.content,
        category: formData.category,
    };

    try {
      await axios.put(
        `http://localhost:5000/notice/edit/${formData._id}`, 
        updatePayload,
        { withCredentials: true }
      );

      setMessage("Notice posted Updated successfully!");
      setFormData({ title: "", content: "", category: "" }); 
    } catch (error) {
      console.error(error);
      setMessage("Failed to post notice.");
    } finally {
      setLoading(false);
      navigate('/noticeupload')
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Edit Notice
            </h2>

            <form className="bg-white p-6 shadow rounded-lg space-y-4" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label className="block text-sm font-semibold text-gray-600">
                Title <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                name="title"
                className="form-control mt-1 p-2 border rounded w-full"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter notice title"
                />
            </div>

            <div className="form-group">
                <label className="block text-sm font-semibold text-gray-600">
                Content <span className="text-red-500">*</span>
                </label>
                <textarea
                name="content"
                className="form-control mt-1 p-2 border rounded w-full"
                rows="4"
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Write the content of the notice"
                />
            </div>

            <div className="form-group">
                <label className="block text-sm font-semibold text-gray-600">
                Category
                </label>
                <input
                type="text"
                name="category"
                className="form-control mt-1 p-2 border rounded w-full"
                value={formData.category}
                onChange={handleChange}
                placeholder="E.g., Exams, Events, General"
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                disabled={loading}
            >
                {loading ? "Uploading..." : "Upload Notice"}
            </button>

            {message && (
                <p className="text-center mt-4 font-semibold text-green-600">
                {message}
                </p>
            )}
            </form>
        </div>
    </div>
  )
}

export default NoticeEdit;