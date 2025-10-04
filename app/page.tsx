import AboutPage from "@/components/About";
import DailyArrivals from "@/components/DailyArrivals";
import Fruit from "@/components/Fruit";
import Head from "next/head";
import Hero from "@/components/Hero";

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
      <Hero />
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
