import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useAuth } from "@clerk/clerk-react"
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
  const { orders } = useContext(ProductContext);
  const navigate = useNavigate();
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="mb-4 text-2xl font-semibold">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
          <thead className="text-gray-600 bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-left">Order ID</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Quantity</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Total</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Products</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders.length > 0 ? (
              orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{order.id}</td>
                  <td className="px-6 py-4 text-sm">{order.date}</td>
                  <td className="px-6 py-4 text-sm">{order.items.reduce((total, item) => total + item.quantity, 0)}</td>
                  <td className="px-6 py-4 text-sm">₹{order.total}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex flex-wrap gap-4">
                      {order.items.map(item => (
                        <div key={item.id} className="flex items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-16 h-16 rounded-md"
                          />
                          <span>{item.title} x {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-700">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
