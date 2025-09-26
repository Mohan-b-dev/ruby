import React from "react";
import { MapPin, Phone, Mail, Clock, Star, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Ruby Fruits Shop Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                R
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-green-500 bg-clip-text text-transparent">
                RUBY FRUITS <br />
                <span className="text-green-700 text-sm font-semibold relative -top-1">
                  SHOP
                </span>
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Chennai's trusted destination for premium quality fruits since
              2018. Years of dedicated expertise in bringing you the freshest
              fruits.
            </p>

            {/* Star Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-300 ml-2">(1000+ Reviews)</span>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Avadi Railway Station Road, Chennai, TN
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">rubyfruits@email.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Daily 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Our Promise Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Promise</h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">
                  100% Fresh Quality Guarantee
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">
                  Daily Fresh Stock Arrivals
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">Best Prices in Chennai</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">
                  Customer Satisfaction Priority
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">
                  Local & Exotic Fruit Varieties
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-sm">
              <span>
                © 2024 Ruby Fruits Shop. All rights reserved. | Made with{" "}
              </span>
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
              <span>for Chennai fruit lovers</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
