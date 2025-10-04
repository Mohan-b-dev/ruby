"use client";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Star, Heart } from "lucide-react";

export default function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    fetch("/api/footer")
      .then((res) => res.json())
      .then((data) => setFooter(data));
  }, []);

  if (!footer) return null; // wait for data

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-300">{footer.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">{footer.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">{footer.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">{footer.timing}</span>
              </div>
            </div>
          </div>

          {/* Our Promise Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Promise</h3>
            <div className="space-y-3">
              {footer.promises.map((p, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <span>
                © 2024 Ruby Fruits Shop. All rights reserved. | Made with{" "}
              </span>
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
              <span>for Chennai fruit lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
