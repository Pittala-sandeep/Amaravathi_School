import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Trophy,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import Whatsapp from "../components/whatapp";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN;

  useEffect(() => {
    axios
      .get(`${ADMIN_ORIGIN}/carousel`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="w-full relative mt-2">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[720px] overflow-hidden">
          {data.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                src={slide.image.url}
                alt="image"
                className="w-full h-auto object-fit-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Amaravathi Grammar High School
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over four decades, we have been committed to providing
              exceptional education that nurtures not just academic excellence,
              but also character development and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Comprehensive curriculum designed to challenge and inspire
                students
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Dedicated teachers committed to student success and growth
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition-shadow">
              <Trophy className="h-12 w-12 text-yellow-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Awards & Recognition
              </h3>
              <p className="text-gray-600">
                Consistently recognized for educational excellence and
                innovation
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-purple-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Focus on character building and overall personality development
              </p>
            </div>
          </div>
        </div>
      </section>

      <Whatsapp/>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
            <Link
              to="/gallery"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg
                    className="h-10 w-10 text-purple-700 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Photo Gallery
                </h3>
                <p className="text-gray-600">
                  Explore our school events, activities, and memorable moments
                </p>
              </div>
            </Link>

            <Link
              to="/notices"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg
                    className="h-10 w-10 text-blue-700 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5 5v-5zM9 14h6v-2H9v2zM9 10h6V8H9v2zM9 6h6V4H9v2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Latest Notices
                </h3>
                <p className="text-gray-600">
                  Stay updated with school announcements and important
                  information
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div> 
  );
};

export default Home;
