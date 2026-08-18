function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold">
              Shop<span className="text-blue-500">Sphere</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Premium shopping experience with the latest electronics,
              unbeatable quality and fast delivery.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Shop</li>
              <li>Categories</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Support
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              support@shopsphere.com
            </p>

            <p className="text-gray-400 mt-2">
              +91 9876543210
            </p>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-gray-400">
          © 2026 ShopSphere. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;