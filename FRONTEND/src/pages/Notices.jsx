import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt, FaUserAlt, FaEye } from "react-icons/fa";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN;

  useEffect(() => {
    axios.get(`${ADMIN_ORIGIN}/notice`)
      .then((res) => setNotices(res.data))
      .catch((err) => console.error("Error fetching notices", err));
  }, []);

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-GB");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 bg-cover bg-center" style={{ backgroundImage: `url('/hero.png')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#075599"}}>School Notices</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color:"#075599"}}>
              Stay updated with the latest announcements and important information
            </p>
          </div>
        </div>
      </section>


      {/* Notices List */}
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Latest Notices</h1>
      
      <div className="grid gap-6">
        {notices.map((notice) => (
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
            <h2 className="text-lg font-bold text-gray-900">{notice.title}</h2>

            {/* Content Preview */}
            <p className="text-gray-600 line-clamp-3">{notice.content}</p>

            {/* Footer Row */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FaCalendarAlt /> {formatDate(notice.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Notices;