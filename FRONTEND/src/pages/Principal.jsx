import React from "react";
import { Award, BookOpen } from "lucide-react";
import Whatsapp from "../components/whatapp";

const Principal = () => {
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
              Founder's Message
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#075599" }}
            >
              Leadership, Vision, and Dedication to Excellence
            </p>
          </div>
        </div>
      </section>

      <Whatsapp />

      {/* Principal Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Principal Photo and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <img
                    src="sir.jpg"
                    alt="Sri Vattipalli Koteshwar Reddy"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Late Sri Vattipalli Koteshwar Reddy
                  </h2>
                  <p className="text-blue-600 font-semibold mb-4">Founder</p>
                </div>
              </div>
            </div>

            {/* Principal's Message */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Welcome Message
                </h3>

                <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 italic">
                    "Education is not just about filling minds with facts, but
                    about igniting the spark of curiosity, nurturing creativity,
                    and building character that will serve our students
                    throughout their lives."
                  </p>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Vattipalli Koleshwar Reddy, a visionary leader with over 30
                    years of experience in the education field, has
                    dedicated his life to uplifting the children of below
                    poverty line. He encouraged the students (including family
                    people), showing that how education can
                    modify the lives of the people. He always followed the
                    path like Love, Truth & Peace which are the essentials
                    to enlight the lives of the students and society.
                    His generosity, humbleness towards people made him <b>"Kotanna"</b>
                    among the society. His vision and dedicated service have
                    enabled AG Schools to enter into a new era of education.
                  </p>

                  <p>
                    He is renowned for integrating technology, education, and
                    research to make AG Schools an exemplary institution that
                    prepares capable, smart, loyalty, integrity students to meet
                    the challenges of the modern global scenario. His intention
                    to make education as smart and moral, more accessible
                    to all the classes of people was exemplary
                    . His relentless efforts as the founder of AGS
                    has made the school a renowned one in Sec-bad. Under his
                    leadership AGS has achieved remarkable growth, setting
                    benchmarks in academics & student development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications and Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Qualifications & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Education
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 ">
                <li>• MA Literature, Osmania University</li>
              </ul>
            </div>

            {/* Awards and Recognition */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <Award className="h-12 w-12 text-yellow-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Awards</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• National Integration Award (1994)</li>
                <li>• Bellam Venumadav Art Theatre Award (1994)</li>
                <li>• Nehru Yuha Kendra Award (1995)</li>
                <li>• Pitman’s Fellowship Award (1995)</li>
                <li>• Surya Chandra Award (1995)</li>
                <li>• Mega Academician Award (1995)</li>
                <li>• Potti Sriramulu Smaraka Award for Best Educationist (1995)</li>
                <li>• Kalamani Visista Seva Purskar (1996)</li>
                <li>• Amulya Vidya Ratna Award (1996)</li>
                <li>• Creative Eminent Award (1996)</li>
                <li>• NTR Memorial Award (1997)</li>
                <li>• Mega Citizen Award (1997)</li>
                <li>• International Distinguished Leadership Award (1999)</li>
                <li>• Arch of Excellence Education Award (2003)</li>
                <li>• Rashtriya Ekta Award (2003)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;