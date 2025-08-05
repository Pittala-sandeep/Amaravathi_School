import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: "3.5rem", width: "3.5rem" }}
              />
              <span className="text-xl font-bold">Amaravathi Grammar High School</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nurturing young minds for a brighter tomorrow. Excellence in education since 1985.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/notices" className="text-gray-300 hover:text-white transition-colors">Notices</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">info@Amaravathi.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Amaravathi Grammar High School School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;