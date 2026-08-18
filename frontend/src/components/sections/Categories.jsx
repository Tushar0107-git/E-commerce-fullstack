import { FaLaptop, FaMobileAlt, FaHeadphones, FaClock } from "react-icons/fa";

const categories = [
  {
    name: "Laptops",
    icon: <FaLaptop size={40} />,
  },
  {
    name: "Mobiles",
    icon: <FaMobileAlt size={40} />,
  },
  {
    name: "Audio",
    icon: <FaHeadphones size={40} />,
  },
  {
    name: "Smart Watches",
    icon: <FaClock size={40} />,
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-14">
        Shop By Category
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-10 shadow hover:-translate-y-2 transition cursor-pointer text-center"
          >
            <div className="text-blue-600 flex justify-center">
              {category.icon}
            </div>

            <h3 className="text-xl font-semibold mt-6">
              {category.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;