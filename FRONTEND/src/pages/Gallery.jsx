import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Image as ImageIcon,
  Play,
  Calendar,
  Eye,
} from "lucide-react";
import axios from "axios";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN;

  useEffect(() => {
    axios
      .get(`${ADMIN_ORIGIN}/gallery`)
      .then((res) => {
        setGalleryItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-GB");

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const openLightbox = (item, imageIndex = 0) => {
    setSelectedImage({ ...item, currentImageIndex: imageIndex });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage && selectedImage.images.length > 1) {
      const nextIndex =
        (selectedImage.currentImageIndex + 1) % selectedImage.images.length;
      setSelectedImage({ ...selectedImage, currentImageIndex: nextIndex });
    }
  };

  const prevImage = () => {
    if (selectedImage && selectedImage.images.length > 1) {
      const prevIndex =
        selectedImage.currentImageIndex === 0
          ? selectedImage.images.length - 1
          : selectedImage.currentImageIndex - 1;
      setSelectedImage({ ...selectedImage, currentImageIndex: prevIndex });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#075599" }}
            >
              Photo Gallery
            </h1>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#075599" }}
            >
              Capturing memorable moments and achievements at Amaravathi Grammar
              High School
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all"
                      ? "All Categories"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filterCategory === "all"
                ? "All Albums"
                : `${
                    filterCategory.charAt(0).toUpperCase() +
                    filterCategory.slice(1)
                  } Albums`}
            </h2>
            <span className="text-gray-600">
              {filteredItems.length} albums found
            </span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No albums found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative">
                    <div
                      className={`grid gap-2 ${
                        item.images.length === 1
                          ? "grid-cols-1"
                          : item.images.length === 2
                          ? "grid-cols-2"
                          : item.images.length === 3
                          ? "grid-cols-3"
                          : item.images.length === 4
                          ? "grid-cols-4":
                            "grid-cols-5"
                      }`}
                    >
                      {item.images.map((img, index) => (
                        <img
                          key={index}
                          src={img.url}
                          alt={`${item.title}-${index}`}
                          className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                        />
                      ))}
                    </div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                      {item.images.length}{" "}
                      {item.images.length === 1 ? "photo" : "photos"}
                    </div>
                    <div className="absolute top-2 left-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium text-white ${
                          item.category === "sports"
                            ? "bg-green-600"
                            : item.category === "academics"
                            ? "bg-blue-600"
                            : item.category === "cultural"
                            ? "bg-purple-600"
                            : item.category === "events"
                            ? "bg-yellow-600"
                            : item.category === "campus"
                            ? "bg-gray-600"
                            : "bg-red-600"
                        }`}
                      >
                        {item.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="max-w-6xl max-h-full w-full relative">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation arrows */}
            {selectedImage.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.images[selectedImage.currentImageIndex].url}
                alt={selectedImage.title}
                className="w-full max-h-96 object-contain"
              />

              {/* Image info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>

                {selectedImage.images[selectedImage.currentImageIndex]
                  .caption && (
                  <p className="text-sm text-gray-500 mb-4">
                    {
                      selectedImage.images[selectedImage.currentImageIndex]
                        .caption
                    }
                  </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                      {selectedImage.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(selectedImage.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{selectedImage.views} views</span>
                    </div>
                  </div>

                  {selectedImage.images.length > 1 && (
                    <span>
                      {selectedImage.currentImageIndex + 1} of{" "}
                      {selectedImage.images.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
