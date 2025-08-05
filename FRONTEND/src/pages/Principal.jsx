import React from 'react';
import { Mail, Phone, Award, BookOpen, Users, Globe } from 'lucide-react';
import Whatsapp from "../components/whatapp";

const Principal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 bg-cover bg-center" style={{ backgroundImage: `url('/hero.png')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#075599"}}>Principal's Message</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color:"#075599"}}>
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
                    src="https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Dr. Sarah Johnson"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h2>
                  <p className="text-blue-600 font-semibold mb-4">Principal</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">principal@stmarysintl.edu</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">(555) 123-4567 ext. 101</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Leadership Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Years of Experience</span>
                    <span className="font-semibold text-blue-600">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Years at St. Mary's</span>
                    <span className="font-semibold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students Mentored</span>
                    <span className="font-semibold text-blue-600">3000+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Principal's Message */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Welcome Message</h3>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 italic">
                    "Education is not just about filling minds with facts, but about igniting the spark of curiosity, nurturing creativity, and building character that will serve our students throughout their lives."
                  </p>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Dear Students, Parents, and Community Members,
                  </p>
                  
                  <p>
                    It is with great pride and enthusiasm that I welcome you to St. Mary's International School. As we embark on another exciting academic year, I am reminded of the incredible journey we share in shaping the minds and hearts of tomorrow's leaders.
                  </p>
                  
                  <p>
                    Our school stands as a beacon of educational excellence, where traditional values meet innovative teaching methodologies. We believe that every child is unique, with their own talents, dreams, and potential waiting to be unlocked. Our dedicated faculty and staff work tirelessly to create an environment where students feel safe, supported, and inspired to reach their highest potential.
                  </p>
                  
                  <p>
                    At St. Mary's, we understand that education extends far beyond textbooks and examinations. We are committed to nurturing well-rounded individuals who are not only academically proficient but also emotionally intelligent, socially responsible, and globally aware. Our comprehensive programs in academics, arts, sports, and community service ensure that every student has the opportunity to discover and develop their passions.
                  </p>
                  
                  <p>
                    The world our students will inherit is rapidly changing, presenting both challenges and opportunities. We prepare them by fostering critical thinking, creativity, collaboration, and communication skills – the essential competencies for success in the 21st century. Our state-of-the-art facilities, innovative curriculum, and experienced educators work together to provide an educational experience that is both rigorous and enjoyable.
                  </p>
                  
                  <p>
                    To our parents, I want to express my gratitude for entrusting us with your most precious gifts – your children. We consider ourselves partners in their education and development, and we value the collaboration between home and school that makes our community so strong.
                  </p>
                  
                  <p>
                    To our students, remember that you are the authors of your own success stories. Embrace every opportunity to learn, grow, and make a positive difference in the world. The values you develop here, the friendships you forge, and the knowledge you gain will serve as the foundation for a lifetime of achievement and fulfillment.
                  </p>
                  
                  <p>
                    I encourage you to explore our website, visit our campus, and experience firsthand the warmth, excellence, and innovation that define St. Mary's International School. Together, we will continue to build upon our proud tradition while preparing for an even brighter future.
                  </p>
                  
                  <p className="font-semibold">
                    Warm regards,<br />
                    Dr. Sarah Johnson<br />
                    Principal, St. Mary's International School
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Qualifications & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Ph.D. in Educational Leadership, Harvard University</li>
                <li>• M.Ed. in Curriculum & Instruction, Stanford University</li>
                <li>• B.A. in English Literature, Yale University</li>
                <li>• Certificate in International Education, Cambridge</li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Principal, St. Mary's International (2012-Present)</li>
                <li>• Vice Principal, Wellington Academy (2008-2012)</li>
                <li>• Head of Department, Riverside School (2005-2008)</li>
                <li>• Senior Teacher, Greenwood High (2000-2005)</li>
              </ul>
            </div>

            {/* Awards and Recognition */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <Award className="h-12 w-12 text-yellow-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Awards</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Excellence in Educational Leadership (2023)</li>
                <li>• Outstanding Principal Award (2021)</li>
                <li>• Innovation in Education Award (2019)</li>
                <li>• Community Service Recognition (2018)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Educational Philosophy</h2>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-2" />
                  Global Perspective
                </h3>
                <p className="text-gray-700">
                  Preparing students to be global citizens who understand and appreciate diverse cultures, perspectives, and ways of thinking.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Collaborative Learning
                </h3>
                <p className="text-gray-700">
                  Fostering an environment where students learn from each other, building teamwork and communication skills essential for success.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Lifelong Learning
                </h3>
                <p className="text-gray-700">
                  Instilling a love for learning that extends beyond the classroom, encouraging curiosity and intellectual growth throughout life.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Character Development
                </h3>
                <p className="text-gray-700">
                  Building strong moral foundations, integrity, and leadership qualities that will guide students in all their future endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;