import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useAuth } from "@clerk/clerk-react"




const Cart = () => {

  const navigate = useNavigate();

  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  const { cart, increaseQuantity, decreaseQuantity, removeItem, calculateTotal, checkout } = useContext(ProductContext);


  // Define a function to handle checkout and show toast
  const handleCheckout = () => {
    checkout();
    toast.success('Order Placed Successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    // Redirect after a short delay to allow toast to display
    setTimeout(() => {
      navigate('/myorder');
    }, 1000);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="mb-6 text-2xl font-semibold text-center">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
          <thead className="text-gray-600 bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-left">Product</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Quantity</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Price</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Total</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {cart.length > 0 ? (
              cart.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="flex flex-col items-center gap-4 px-4 py-4 text-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-16 h-16 rounded-md"
                    />
                    <span>{item.title}</span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="px-2 py-1 text-sm text-white bg-gray-800 rounded-md"
                        disabled={item.quantity <= 1}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-sm text-white bg-gray-800 rounded-md"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm">₹{item.price.toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm">₹{(item.quantity * item.price).toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm">
                    <button
                      className="hover:text-red-700 focus:outline-none text-sm text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-700">No items in the cart.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 mt-6 bg-white border border-gray-200 rounded-md shadow-md">
        <div className="md:flex-row md:justify-between flex flex-col mb-4 text-xl font-semibold">
          <h2>Order Summary</h2>
          <div className="md:mt-0 mt-4 text-lg">
            <span className="font-medium">Subtotal:</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-black md:w-40 w-full py-2 text-sm text-white bg-black rounded-md"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Cart;
