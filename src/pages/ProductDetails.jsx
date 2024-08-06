import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import NoProductsPage from "./NoProductsPage";

const ProductDetails = () => {

  const { products, loading, addToCart } = useContext(ProductContext);

  const { id } = useParams();

  const productId = parseInt(id, 10);

  const product = products.find(product => product.id === productId);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) return <LoadingPage />

  if (!products || products.length === 0) return <NoProductsPage />


  return (
    <div className="bg-gray-50 sm:px-6 lg:px-8 min-h-[70vh] px-4 py-8">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 md:rounded-tr-none md:rounded-l-lg object-fill w-full rounded-t-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col justify-between p-6">
            <div>
              <h1 className="mb-2 text-3xl font-extrabold text-gray-900">{product.title}</h1>
              <p className="mb-4 text-xl font-semibold text-gray-700">${product.price.toFixed(2)}</p>
              <p className="mb-6 text-gray-600">{product.description}</p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 w-full px-6 py-3 font-semibold text-white transition-transform transform bg-black rounded-lg shadow-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
