
const Searchbox = ({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }) => {


  return (
    <div className="md:flex-row flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md my-2">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products..."
        className="focus:outline-none focus:ring-2 focus:ring-gray-500 flex-grow px-4 py-2 border border-gray-300 rounded-md"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filter Options */}
      <select onChange={(e) => setSelectedFilter(e.target.value)}
        value={selectedFilter} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-4 py-2 border border-gray-300 rounded-md">
        <option value="">Select Filter</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="ratingHighToLow">Rating: High to Low</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default Searchbox;
