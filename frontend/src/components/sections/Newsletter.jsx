function Newsletter() {
  return (
    <section className="py-20 bg-blue-600 text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-6 text-blue-100">
          Subscribe to receive exclusive offers, latest products
          and exciting deals directly in your inbox.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl text-slate-900 w-full md:w-[420px] outline-none"
          />

          <button className="bg-slate-900 hover:bg-black transition px-8 py-4 rounded-xl font-semibold">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;