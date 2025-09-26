import Image from "next/image";

export default function Fruit() {
  return (
    <div className="py-32">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-center text-transparent mb-4">
        Our Fresh Fruit Collection
      </h1>
      <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        Discover our wide variety of premium quality fruits, carefully selected
        and freshly stocked daily for your health and enjoyment
      </p>

      <div className="flex flex-col items-center gap-6 mt-10">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tropical Delights Card */}
          <div className="relative w-[720px] h-80 rounded-3xl overflow-hidden group transition-transform duration-500 ease-in-out hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1758184875542-2a30993210b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Tropical Delights"
              fill
              className="object-cover object-center brightness-110 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-orange-400 opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute bottom-0 left-0 w-full h-full rounded-3xl
                bg-gradient-to-t from-black/0 via-black/0 to-transparent
                group-hover:from-black/70 group-hover:via-black/20
                transition-all duration-500"
              ></div>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                Tropical Delights
              </h2>
              <p className="text-white text-sm drop-shadow-md">
                Fresh tropical fruits bursting with natural sweetness and exotic
                flavors
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Mango", "Pineapple", "Papaya", "Guava", "Jackfruit"].map(
                  (fruit) => (
                    <span
                      key={fruit}
                      className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-sm text-white shadow-md hover:bg-white/30 transition"
                    >
                      {fruit}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Citrus Collection Card */}
          <div className="relative w-[720px] h-80 rounded-3xl overflow-hidden group transition-transform duration-500 ease-in-out hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1755804457362-3f28f995d941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXRydXMlMjBmcnVpdHMlMjBvcmFuZ2VzJTIwbGVtb25zfGVufDF8fHx8MTc1ODYxNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Citrus Collection"
              fill
              className="object-cover object-center brightness-110 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-orange-600 opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute bottom-0 left-0 w-full h-full rounded-3xl
                bg-gradient-to-t from-black/0 via-black/0 to-transparent
                group-hover:from-black/70 group-hover:via-black/20
                transition-all duration-500"
              ></div>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                Citrus Collection
              </h2>
              <p className="text-white text-sm drop-shadow-md">
                Vitamin C rich citrus fruits perfect for immunity and
                refreshment
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "Oranges",
                  "Lemons",
                  "Sweet Lime",
                  "Grapes",
                  "Pomegranate",
                  "Kiwi",
                ].map((fruit) => (
                  <span
                    key={fruit}
                    className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-sm text-white shadow-md hover:bg-white/30 transition"
                  >
                    {fruit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Red Fruits Card */}
          <div className="relative w-[720px] h-80 rounded-3xl overflow-hidden group transition-transform duration-500 ease-in-out hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1607352390302-aa5b705084bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGZydWl0cyUyMGFwcGxlcyUyMGJlcnJpZXN8ZW58MXx8fHwxNzU4NzAyODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Red Fruits"
              fill
              className="object-cover object-center brightness-110 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-pink-500 opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute bottom-0 left-0 w-full h-full rounded-3xl
                bg-gradient-to-t from-black/0 via-black/0 to-transparent
                group-hover:from-black/70 group-hover:via-black/20
                transition-all duration-500"
              ></div>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                Red Fruits
              </h2>
              <p className="text-white text-sm drop-shadow-md">
                Juicy red fruits packed with antioxidants
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Apple", "Strawberry", "Cherry", "Watermelon"].map(
                  (fruit) => (
                    <span
                      key={fruit}
                      className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-sm text-white shadow-md hover:bg-white/30 transition"
                    >
                      {fruit}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Purple Fruits Card */}
          <div className="relative w-[720px] h-80 rounded-3xl overflow-hidden group transition-transform duration-500 ease-in-out hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1641116511856-4859cd2f34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBmcnVpdHMlMjBkcmFnb24lMjBmcnVpdCUyMHBhc3Npb258ZW58MXx8fHwxNzU4NzAyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Purple Fruits"
              fill
              className="object-cover object-center brightness-110 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-indigo-500 opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute bottom-0 left-0 w-full h-full rounded-3xl
                bg-gradient-to-t from-black/0 via-black/0 to-transparent
                group-hover:from-black/70 group-hover:via-black/20
                transition-all duration-500"
              ></div>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                Exotic Varieties
              </h2>
              <p className="text-white text-sm drop-shadow-md">
                Exotic purple fruits rich in nutrients
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Grape", "Blueberry", "Plum", "Fig"].map((fruit) => (
                  <span
                    key={fruit}
                    className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-sm text-white shadow-md hover:bg-white/30 transition"
                  >
                    {fruit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
