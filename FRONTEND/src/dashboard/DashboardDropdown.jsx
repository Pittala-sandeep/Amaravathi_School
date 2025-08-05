import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashboardDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onMouseEnter={toggleDropdown}
        className="group inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white rounded hover:bg-white hover:text-blue-700 focus:outline-none"
      >
        Dashboard
        <i className="fa-solid fa-caret-down text-white ms-1 mt-1 group-hover:text-blue-700"></i>
      </button>

      {open && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          onMouseLeave={closeDropdown}
        >
          <div className="py-1">
            <Link
              to="/carouselupload"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeDropdown}
            >
              Carousel
            </Link>
            <Link
              to="/galleryupload"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeDropdown}
            >
              Gallery
            </Link>
            <Link
              to="/noticeupload"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeDropdown}
            >
              Notices
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardDropdown;
