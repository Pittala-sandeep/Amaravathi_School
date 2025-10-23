import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div>
      {/* Welcome Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Amaravathi Grammar High School
            </h2>
            <>
            {isAuthenticated ? (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              UPDATE DATA 
            </p> ):(<p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              LOGIN TO UPDATE DATA 
            </p> )}
            </>
          </div>
        </div>
      </section>
    </div> 
  );
};

export default Home;