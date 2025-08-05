import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';
import Whatsapp from "../components/whatapp";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 bg-cover bg-center" style={{ backgroundImage: `url('/hero.png')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#075599"}}>About Our School</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color:"#075599"}}>
              Discover our rich history, mission, and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      <Whatsapp />

      {/* School History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Founded in 1982, Amaravathi Grammar High school began as a small community school with just 50 students and 5 teachers. Our founders envisioned an institution that would provide world-class education while maintaining strong moral and ethical values.
              </p>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Over the decades, we have grown into a premier educational institution serving over 1,200 students from kindergarten through grade 12. Our campus has expanded to include state-of-the-art laboratories, sports facilities, libraries, and technology centers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we are proud to be recognized as one of the leading international schools in the region, with our graduates attending top universities worldwide and making significant contributions to their communities.
              </p>
            </div>
            <div className="lg:order-first">
              <img
                src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="School building"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Target className="h-10 w-10 text-blue-700 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To provide exceptional education that develops critical thinking, creativity, and character in every student, preparing them to be responsible global citizens who contribute positively to society.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Eye className="h-10 w-10 text-green-700 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To be a leading international school that inspires lifelong learning, nurtures innovation, and empowers students to shape a better world through knowledge, compassion, and integrity.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Heart className="h-10 w-10 text-yellow-700 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Excellence in all endeavors</li>
                <li>• Respect for diversity and inclusion</li>
                <li>• Integrity and ethical behavior</li>
                <li>• Innovation and creativity</li>
                <li>• Community service and responsibility</li>
                <li>• Lifelong learning mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Recognition and accolades that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center p-6 bg-green-50 rounded-lg me-4">
              <Award className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">100% Pass Rate</h3>
              <p className="text-gray-600">International Board Examinations</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Award className="h-12 w-12 text-yellow-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">50+ Awards</h3>
              <p className="text-gray-600">Academic and Sports Competitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art infrastructure supporting comprehensive education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Library</h3>
              <p className="text-gray-600">Comprehensive collection of books, journals, and digital resources with quiet study spaces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Complex</h3>
              <p className="text-gray-600">Multi-purpose gymnasium, swimming pool, tennis courts, and outdoor playing fields.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;