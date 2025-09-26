import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
      
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <div>
            <h1 className="text-xl font-bold text-orange-500">
              RUBY FRUITS SHOP
            </h1>
            <p className="text-sm text-gray-600">Fresh • Natural • Premium</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center text-green-600">
            <FaMapMarkerAlt className="mr-1" />
            Avadi Railway Station Road
          </div>
          <div className="flex items-center text-orange-500">
            <FaClock className="mr-1" />
            Open Daily 8AM - 10PM
          </div>
        </div>
      </header>

  );
}
