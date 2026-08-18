import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import useCart from "../../hooks/useCart";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight"
          >
            Shop<span className="text-blue-600">Sphere</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center w-[420px] bg-gray-100 rounded-xl px-4 py-3">
            <FiSearch className="text-gray-500" />

            <input
              className="bg-transparent outline-none ml-3 w-full"
              placeholder="Search products..."
            />
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex gap-8 font-medium">
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Categories</Link>
            <Link to="/">About</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">

            {/* Wishlist */}
            <button className="hover:text-red-500 transition">
              <FiHeart size={22} />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FiShoppingCart size={24} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link to="/login">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                Login
              </button>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;