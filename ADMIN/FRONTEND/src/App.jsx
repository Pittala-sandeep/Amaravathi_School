import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./contexts/PrivateRoute";

// Components
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import CarouselUpload from "./dashboard/carousel";
import GalleryUpload from "./dashboard/gallery";
import NoticeUpload from "./dashboard/notice";
import NoticeEdit from './dashboard/noticeEdit';
import GalleryEdit from './dashboard/galleryEdit';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/carouselupload"
                element={
                  <PrivateRoute>
                    <CarouselUpload />
                  </PrivateRoute>
                }
              />
              <Route
                path="/galleryupload"
                element={
                  <PrivateRoute>
                    <GalleryUpload />
                  </PrivateRoute>
                }
              />
              <Route
                path="/noticeupload"
                element={
                  <PrivateRoute>
                    <NoticeUpload />
                  </PrivateRoute>
                }
              />
              <Route
                path="/notice/edit/:id"
                element={
                  <PrivateRoute>
                    <NoticeEdit />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gallery/edit/:id"
                element={
                  <PrivateRoute>
                    <GalleryEdit />
                  </PrivateRoute>
                }
              />
            </Routes> 
          </main>
          {/* <Footer /> */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;