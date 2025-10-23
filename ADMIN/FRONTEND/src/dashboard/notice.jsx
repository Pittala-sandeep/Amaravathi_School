import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
import { NoticeEditDelete } from './noticeED'
import { useNavigate } from "react-router-dom";

const NoticeUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
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

    try {
      const res = await axios.post(
        "http://localhost:5000/notice", 
        formData,
        { withCredentials: true }
      );

      setMessage("Notice posted successfully!");
      setFormData({ title: "", content: "", category: "" }); 
      navigate("/noticeupload")
    } catch (error) {
      console.error(error);
      setMessage("Failed to post notice.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/notice")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-GB");


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Upload Notice
        </h2>

        <form className="bg-white p-6 shadow rounded-lg space-y-4" onSubmit={handleSubmit}>
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

        {/* to show all notice list and can edit or delete */}
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Latest Notices
          </h1>

          <div className="grid gap-6">
            {data.map((notice) => (
              <div
                key={notice._id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 w-full max-w-8xl mx-auto"
              >
                {/* Category Tags */}
                <div className="flex gap-2 mb-2">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 text-xs font-semibold rounded-full uppercase">
                    {notice.category}
                  </span>
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 text-xs font-semibold rounded-full uppercase">
                    Medium
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900">
                  {notice.title}
                </h2>

                {/* Content Preview */}
                <p className="text-gray-600 line-clamp-3">{notice.content}</p>

                {/* Footer Row */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt /> {formatDate(notice.createdAt)}
                  </div>
                </div>
                <NoticeEditDelete notice={notice} setData={setData} data={data}/>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default NoticeUpload;
