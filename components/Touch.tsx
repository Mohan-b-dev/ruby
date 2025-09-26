import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function GetInTouch() {
  return (
    <div>
      <div className="text-center my-12 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-yellow-600 to-yellow-800 bg-clip-text text-transparent">
          Visit Our Store
        </h1>
        <p className="text-gray-600 text-2xl">
          Conveniently located at Avadi Railway Station Road,we're easily
          accessible and <br /> ready to serve you with the freshest fruits in
          chennai
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Cards (Left Side) */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avadi Railway Station Road
                    <br />
                    Chennai, Tamil Nadu
                    <br />
                    India - 602001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Contact
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                    <p className="text-blue-600">rubyfruits@email.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours Card */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Store Hours
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Sunday</p>
                    <p>8:00 AM - 10:00 PM</p>
                    <p className="text-sm text-gray-500">No lunch break</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section (Right Side) */}
          <div className="relative">
            <div
              className="w-full h-96 lg:h-full rounded-lg shadow-md overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #a7f3d0 0%, #fde68a 100%)",
              }}
            >
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                {/* Map Pin Icon */}
                <div className="bg-green-600 p-4 rounded-full mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>

                {/* Find Us Here Text */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Find Us Here
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  Avadi Railway Station Road
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-8 max-w-xs leading-relaxed">
                  Look for the bright red signboard with "RUBY FRUITS SHOP" just
                  opposite to the railway station main entrance.
                </p>

                {/* Get Directions Button */}
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
