import { createContext, useState, useEffect } from "react";
import Axios from "../utils/Axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await Axios.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.log("Unable to fetch API data", err);
      }
    };
    fetchProductData();
  }, []);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Increase Item Quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Item Quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  // Remove Item from Cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate Total Price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  // Get Total Quantity of Items
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Checkout Function
  const checkout = () => {
    setOrders((prevOrders) => [
      ...prevOrders,
      {
        id: Date.now(), // Use timestamp as a unique ID for simplicity
        date: new Date().toISOString().split("T")[0], // Format date as YYYY-MM-DD
        items: cart,
        total: calculateTotal(),
      },
    ]);
    setCart([]);
  };

  return (
    <ProductContext.Provider value={{ products, loading, addToCart, cart, increaseQuantity, decreaseQuantity, removeItem, calculateTotal, getTotalQuantity, checkout, orders }}>
      {children}
    </ProductContext.Provider>
  );
};
