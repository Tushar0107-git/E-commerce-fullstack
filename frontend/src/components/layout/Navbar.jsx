import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
function Navbar() {
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

            <FiSearch className="text-gray-500"/>

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

            <button>
              <FiHeart size={22}/>
            </button>

            <button>
              <FiShoppingCart size={22}/>
            </button>

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