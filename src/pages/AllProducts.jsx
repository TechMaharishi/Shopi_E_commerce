import Searchbox from "../components/Searchbar"
import ProductCard from "../components/ProductCard"
import { useContext, useMemo, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import LoadingPage from "./LoadingPage"
import NoProductsPage from "./NoProductsPage"

const AllProducts = () => {

  const { products, loading } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');


  const filterProducts = useMemo(() => {
    return products
      .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (selectedFilter === 'priceLowToHigh') {
          return a.price - b.price;
        }
        if (selectedFilter === 'priceHighToLow') {
          return b.price - a.price;
        }
        if (selectedFilter === 'ratingHighToLow') {
          return b.rating.rate - a.rating.rate;
        }
        return 0;
      });
  }, [products, searchQuery, selectedFilter]);


  if (loading) return <LoadingPage />

  if (!products || products.length === 0) return <NoProductsPage />

  return (
    <div className="w-full min-h-[70svh] px-7 mx-auto">
      <Searchbox searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <div className="my-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
        {
          filterProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>

    </div>
  )
}

export default AllProducts