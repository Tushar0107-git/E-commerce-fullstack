import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../services/productService";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
          </div>

          <div>
            <p className="text-blue-600 font-semibold uppercase">
              Premium Product
            </p>

            <h1 className="text-5xl font-bold mt-4">
              {product.name}
            </h1>

            <p className="text-slate-500 mt-6 leading-8">
              Premium quality product designed for customers who value
              performance and reliability.
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-8">
              ₹{product.price}
            </h2>

            <button className="mt-10 bg-slate-900 hover:bg-blue-600 transition text-white px-10 py-4 rounded-xl">
              Add To Cart
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;