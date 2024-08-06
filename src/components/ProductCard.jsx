import { useState, useContext } from "react";
import { ShoppingCartIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    // Reset the button state after 1 second
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div key={product.id} className="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-md">
      <Link to={`/product_details/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="object-fill w-full h-48 cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>
        <p className="mb-2 text-gray-600">{product.category}</p>
        <div className="flex justify-between">
          <p className="mb-4 text-lg font-bold">₹{product.price}</p>
          <p className="mb-2 text-yellow-500">Rating: {product.rating.rate}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className={`flex items-center justify-center w-full gap-2 py-2 text-white transition-colors duration-300 rounded-lg ${added
              ? "bg-green-500"
              : "bg-black hover:bg-gray-800"
            }`}
        >
          {added ? (
            <>
              <CheckCircleIcon className="w-5 h-5" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
