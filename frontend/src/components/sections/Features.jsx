import { FaTruckFast, FaShieldHeart, FaRotateLeft, FaAward } from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckFast size={38} />,
    title: "Free Shipping",
    description: "Free delivery on all orders above ₹999.",
  },
  {
    icon: <FaShieldHeart size={38} />,
    title: "Secure Payment",
    description: "100% secure payment with trusted gateways.",
  },
  {
    icon: <FaRotateLeft size={38} />,
    title: "Easy Returns",
    description: "7-day hassle-free return policy.",
  },
  {
    icon: <FaAward size={38} />,
    title: "Premium Quality",
    description: "Only genuine and premium products.",
  },
];

function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Shopping Made Better
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-500 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;