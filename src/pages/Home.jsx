import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <header className="text-white bg-center bg-cover" style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}>
        <div className="py-20 bg-black bg-opacity-50">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-5xl font-bold">Welcome to Shopi</h1>
            <p className="mb-8 text-lg">Find the best products at unbeatable prices.</p>
            <a href="/allproducts" className="hover:bg-blue-600 px-6 py-3 text-white transition duration-300 bg-blue-500 rounded">
              Shop Now
            </a>
          </div>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Why Shop With Us?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="sm:w-1/3 lg:w-1/4 w-full p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold">Free Shipping</h3>
                <p>Get free shipping on all orders over ₹1000.</p>
              </div>
            </div>
            <div className="sm:w-1/3 lg:w-1/4 w-full p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold">24/7 Support</h3>
                <p>We are here to help you anytime, any day.</p>
              </div>
            </div>
            <div className="sm:w-1/3 lg:w-1/4 w-full p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold">Secure Payment</h3>
                <p>Your payment information is safe with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Featured Products</h2>
          <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-6">
            {featuredProducts.map((product) => (
              <div className="p-4">
                <ProductCard key={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Customer Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="md:w-1/3 w-full p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="italic">"Great service and amazing products! Highly recommend Shopi."</p>
                <p className="mt-4 font-bold">- Deepali Nikhare</p>
              </div>
            </div>
            <div className="md:w-1/3 w-full p-4">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="italic">"I love the free shipping and the customer support is top-notch."</p>
                <p className="mt-4 font-bold">- Abhinav Meshram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-4">Stay updated with the latest offers and products.</p>
          <form className="sm:flex-row flex flex-col items-center justify-center gap-4">
            <input type="email" placeholder="Enter your email" className="focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 border border-gray-300 rounded" />
            <button type="submit" className="hover:bg-blue-600 px-6 py-2 text-white transition duration-300 bg-blue-500 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
