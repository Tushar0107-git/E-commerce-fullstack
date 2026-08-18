import { Link } from "react-router-dom";
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import useCart from "../hooks/useCart";

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">

            <FiShoppingBag
              size={70}
              className="mx-auto text-gray-400"
            />

            <h2 className="text-2xl font-bold mt-6">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Start shopping and add your favourite products.
            </p>

            <Link
              to="/"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow p-5 flex gap-6 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-blue-600 font-semibold mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-6">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-200 p-2 rounded-full"
                      >
                        <FiMinus />
                      </button>

                      <span className="text-lg font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-200 p-2 rounded-full"
                      >
                        <FiPlus />
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={24} />
                  </button>

                </div>
              ))}

            </div>

            {/* Summary */}

            <div className="bg-white rounded-2xl shadow p-8 h-fit">

              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">

                <span>Total</span>

                <span className="font-bold text-xl">
                  ₹{totalPrice.toLocaleString()}
                </span>

              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold">
                Proceed To Checkout
              </button>

            </div>

          </div>
        )}

      </section>

      <Footer />
    </>
  );
}

export default Cart;