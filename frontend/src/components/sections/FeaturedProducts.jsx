import ProductCard from "../ProductCard";

function FeaturedProducts({ products }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Featured Collection
        </p>

        <h2 className="text-5xl font-bold mt-3 text-slate-900">
          Trending Products
        </h2>

        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          Explore our handpicked premium collection of gadgets designed
          to elevate your everyday lifestyle.
        </p>

      </div>

      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-slate-500 py-16">
            No Products Found
          </div>
        )}

      </div>

    </section>
  );
}

export default FeaturedProducts;