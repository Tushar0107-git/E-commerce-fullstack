import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Features from "../components/sections/Features";
import Newsletter from "../components/sections/Newsletter";
import Footer from "../components/layout/Footer";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts products={products} />

      <Features />

      <Newsletter />

      <Footer />
    </div>
  );
}

export default Home;