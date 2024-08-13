const Searchbox = ({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }) => {
  return (
    <div className="md:flex-row flex flex-col items-center gap-4 p-4 my-4 bg-white rounded-lg shadow-lg">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products..."
        className="focus:outline-none focus:ring-2 focus:ring-teal-500 flex-grow px-4 py-2 transition duration-300 ease-in-out border border-gray-300 rounded-lg"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />

      {/* Filter Options */}
      <select
        onChange={(e) => setSelectedFilter(e.target.value)}
        value={selectedFilter}
        className="focus:outline-none focus:ring-2 focus:ring-teal-500 px-4 py-2 transition duration-300 ease-in-out border border-gray-300 rounded-lg"
      >
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
