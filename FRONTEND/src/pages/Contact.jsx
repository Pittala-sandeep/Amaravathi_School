import React from "react";
import { MapPin, Phone, Mail, Clock,} from "lucide-react";

const Contact = () => {
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
              Contact Us
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#075599" }}
            >
              Get in touch with us for admissions, inquiries, or any questions
              about our school
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      12-11-146
                      <br />
                      Namalagundu, Sethaphalmandi
                      <br />
                      Secunderabad 500061
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Alternate Address
                    </h3>
                    <p className="text-gray-600">
                      12-10-822
                      <br />
                      medibavi, Sethaphalmandi
                      <br />
                      Secunderabad 500061
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600">
                      Main Office:{" "}
                      <a
                        href="tel:+919052454540"
                        className="text-blue-600 hover:underline"
                      >
                        +91 9052454540
                      </a>
                      <br />
                      Admissions:{" "}
                      <a
                        href="tel:+15551234568"
                        className="text-blue-600 hover:underline"
                      >
                        +1 (555) 123-4568
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email Addresses
                    </h3>
                    <p className="text-gray-600">
                      General:{" "}
                      <a
                        href="mailto:amaravathigrammar1982@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        amaravathigrammar1982@gmail.com
                      </a>
                      <br />
                      Admissions:{" "}
                      <a
                        href="mailto:amaravathimodelwing99@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        amaravathimodelwing99@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="/about"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    About Us
                  </a>
                  <a
                    href="/notices"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Latest Notices
                  </a>
                  <a
                    href="/gallery"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Photo Gallery
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit Our Campus
                </h2>
                <p className="text-xl text-gray-600">
                  Located in the heart of Learning City
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.91952991164803!2d78.51472577818215!3d17.42558061219683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754403521560!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "Admission requirements vary by grade level. Generally, we require completed application forms, academic transcripts, and an entrance assessment. Please contact our admissions office for specific requirements.",
              },
              {
                question: "What is the school calendar?",
                answer:
                  "Our academic year runs from June to April, with breaks for holidays and summer vacation.",
              },
              {
                question: "What extracurricular activities are available?",
                answer:
                  "We offer a wide range of activities including sports teams, music ensembles, drama club, debate team, science club, and various cultural and academic societies.",
              },
              {
                question:
                  "How can parents stay updated with school activities?",
                answer:
                  "Parents can stay updated through our school website, and our official social media channels.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;