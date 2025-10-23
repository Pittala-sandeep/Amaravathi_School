import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  User,
  Phone,
  Image,
  Bell,
  LogOut,
  LockKeyhole,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const dashboardNavigation = [
    { name: "Carousel Upload", href: "/carouselupload", icon: User },
    { name: "Gallery Upload", href: "/galleryupload", icon: Image },
    { name: "Notice Upload", href: "/noticeupload", icon: Bell },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav
      className="text-white shadow-lg sticky top-0 z-50"
      style={{ backgroundColor: "#075599" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center ">
              {/* Logo */}
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: "3.5rem", width: "3.5rem" }}
              />

              {/* Title Block */}
              <div className="flex flex-col leading-tight">
                <span
                  className="text-2xl sm:text-3xl font-extrabold uppercase"
                  style={{ color: "#FEE600" }}
                >
                  AMARAVATHI
                </span>
                <span
                  className="text-sm sm:text-base text-center font-semibold tracking-wide"
                  style={{ color: "#F2F2F2" }}
                >
                  Grammar High School
                </span>
              </div>
            </Link>
              <div className="flex items-center md:hidden">
                <img
                  src="/sir.jpg"
                  alt="SIR"
                  style={{
                    height: "3.5rem",
                    width: "3.5rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1 items-center">
              {isAuthenticated ? (
                <>
                  {dashboardNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm text-white font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 "
                  >
                    <span className=" text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-700 transition-colors flex">
                      <LogOut className="h-4 w-4 mt-1 me-1" /> Logout
                    </span>
                  </button>
                  <div className="flex items-center">
                    <img
                      src="/sir.jpg"
                      alt="SIR"
                      style={{
                        height: "3.5rem",
                        width: "3.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {dashboardNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm text-white font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className="group text-blue-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-700 transition-colors"
                  >
                    <span className="group-hover:text-blue-700 text-white  rounded-md text-sm font-medium hover:bg-white hover:text-blue-700 transition-colors flex">
                      <LockKeyhole className="h-4 w-4 mt-0.5 me-1" /> Login
                    </span>
                  </Link>
                  <div className="flex items-center">
                    <img
                      src="/sir.jpg"
                      alt="SIR"
                      style={{
                        height: "3.5rem",
                        width: "3.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus:text-blue-700"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <div className="px-3 py-2 space-y-2">
              <div className="flex items-center"></div>
              {isAuthenticated ? (
                <>
                  <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                      {dashboardNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            location.pathname === item.href
                              ? "text-blue-700 bg-blue-50"
                              : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  {dashboardNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className="block bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;