import { FaLeaf, FaAward, FaClock, FaUsers } from "react-icons/fa";

// Define CSS for the gradient circle
const styles = `
  .gradient-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem; /* Adjust size as needed */
    height: 4rem;
    background: linear-gradient(to bottom right, #22c55e, #f97316, #ef4444); /* green → orange → red, angled downwards */
    border-radius: 50%;
  }
  @media (min-width: 640px) {
    .gradient-circle {
      width: 5rem;
      height: 5rem;
    }
  }
  .gradient-circle svg {
    color: white; /* Icon color for contrast */
  }
`;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 p-6">
      {/* Inject CSS styles */}
      <style>{styles}</style>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent mb-4">
          About Ruby Fruits Shop
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Located in the heart of Avadi Railway Station Road, Ruby Fruits Shop
          has been Chennai's trusted destination for premium quality fruits
          since 2018. We take pride in bringing you the freshest, most
          nutritious fruits from across India and beyond.
        </p>
        <p className="text-gray-600 mt-4">
          Our commitment to quality, freshness, and customer satisfaction has
          made us a beloved part of the community. From exotic tropical fruits
          to seasonal favorites, we carefully select each piece to ensure you
          get nothing but the best.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="gradient-circle">
              <FaLeaf className="text-4xl sm:text-5xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg text-black">Farm Fresh Quality</h3>
          <p className="text-gray-400 text-sm mt-2">
            Sourced directly from local farms and trusted suppliers across Tamil
            Nadu and India.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="gradient-circle">
              <FaAward className="text-4xl sm:text-5xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg text-black">6+ Years Experience</h3>
          <p className="text-gray-400 text-sm mt-2">
            Years of dedicated expertise in selecting and providing the finest
            fruits to Chennai families.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="gradient-circle">
              <FaClock className="text-4xl sm:text-5xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg text-black">Daily Fresh Stock</h3>
          <p className="text-gray-400 text-sm mt-2">
            New arrivals every morning ensuring you get the freshest fruits
            available in the market.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="gradient-circle">
              <FaUsers className="text-4xl sm:text-5xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg text-black">Community Trusted</h3>
          <p className="text-gray-400 text-sm mt-2">
            Serving thousands of satisfied customers in Avadi and surrounding
            areas with dedication.
          </p>
        </div>
      </div>
    </div>
  );
}
