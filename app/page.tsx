import AboutPage from "@/components/About";
import DailyArrivals from "@/components/DailyArrivals";
import Fruit from "@/components/Fruit";
import Head from "next/head";
import { CiStar, CiDeliveryTruck, CiHeart } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import Touch from "@/components/Touch";
import HowToReachUs from "@/components/HowToReachUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Head>
        <title>Ruby Fruits Shop</title>
        <meta
          name="description"
          content="Chennai's Premium Destination for Fresh, Quality Fruits"
        />
      </Head>

      {/* Header */}

      {/* Hero Section */}
      <main
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552825896-8059df63a1fb?ixlib=rb-4.1.0&q=80&w=1920&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-6xl font-bold mb-4 text-yellow-300">
            RUBY FRUITS SHOP
          </h2>
          <p className="text-2xl mb-6 text-yellow-100">
            Chennai's Premium Destination for Fresh, Quality Fruits
          </p>
          <p className="text-xl mb-8 text-yellow-200">
            Avadi Railway Station Road, Chennai, Tamil Nadu
          </p>
          <div className="flex flex-wrap gap-6 mb-8 justify-center">
            {[
              {
                color: "green",
                text: "Premium Quality",
                icon: <CiStar className="w-12 h-12 text-yellow-400" />,
                bgColor: "green-500",
              },
              {
                color: "yellow",
                text: "Fresh Daily",
                icon: <CiDeliveryTruck className="w-12 h-12 text-orange-400" />,
                bgColor: "orange-500/30",
              },
              {
                color: "blue",
                text: "Organic Certified",
                icon: <IoShieldOutline className="w-12 h-12 text-blue-400" />,
                bgColor: "blue-300",
              },
              {
                color: "red",
                text: "Family Owned",
                icon: <CiHeart className="w-12 h-12 text-pink-400" />,
                bgColor: "pink-300",
              },
            ].map(({ color, text, icon, bgColor }) => (
              <div key={text} className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center bg-${bgColor}/20 backdrop-blur-md border border-white/20 rounded-full w-24 h-24 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  {icon || (
                    <span
                      className={`w-12 h-12 bg-${color}-400 rounded-full`}
                    />
                  )}
                </div>
                <p className="text-center text-white font-semibold mt-2 text-sm shadow-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <button
            style={{
              background:
                "linear-gradient(to right, #22c55e, #f97316, #ef4444)",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              fontSize: "1.125rem",
            }}
          >
            Explore Our Fruits
          </button>
          <p className="text-sm text-yellow-200 mb-2">
            Open Daily • 8:00 AM - 10 PM
          </p>
          <p className="text-sm text-yellow-300">Scroll to explore</p>
        </div>
      </main>
      {/* About Section */}
      <AboutPage />

      {/* Why Choose Section */}
      <div className="bg-yellow-50 ">
        <section className="py-12 px-4 text-center">
          <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl p-6 mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Choose Ruby Fruits Shop?
            </h2>
            <p className="text-white text-center">
              We believe that quality fruits are essential for a healthy
              lifestyle. That’s why we go the extra mile to ensure every fruit
              in our shop meets our high standards of freshness, taste, and
              nutritional value.
            </p>
          </div>
        </section>
      </div>

      {/* Fruit collection */}
      <Fruit />

      {/* Daily Arrivals Section */}
      <DailyArrivals />

      {/*Get in Touch section */}
      <Touch />

      <HowToReachUs />
    </div>
  );
}
