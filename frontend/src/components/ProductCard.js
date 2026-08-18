import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product);

    toast.success(`${product.name} added to cart`);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition"
        >
          <FiHeart className="text-slate-600 hover:text-red-500" />
        </button>

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          NEW
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar />

          <span className="text-slate-500 text-sm ml-2">
            (4.8)
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-slate-900">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm mt-2">
          Premium quality product with fast delivery.
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <span className="text-slate-400 line-through">
            ₹99,999
          </span>
        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-6 w-full bg-slate-900 hover:bg-blue-600 transition-all duration-300 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          <FiShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;