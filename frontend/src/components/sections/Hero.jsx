import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Premium Collection 2026
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Shop Smarter,
            <br />
            Live Better.
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
            Discover premium electronics, stylish accessories and
            cutting-edge gadgets with a shopping experience designed
            for speed, quality and trust.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
              Shop Now
            </button>

            <button className="border border-slate-300 hover:bg-slate-100 transition px-8 py-4 rounded-xl font-semibold">
              Explore Collection
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

         <img
           src={heroImage}
           alt="ShopSphere Hero"
           className="relative w-full max-w-2xl object-contain"
           draggable="false"
         />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;