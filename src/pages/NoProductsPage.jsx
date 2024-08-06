const NoProductsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16">
      <h1 className="mb-4 text-2xl font-semibold">No Products Available</h1>
      <p className="text-gray-600">We could not find any products. Please check back later or try a different search.</p>
    </div>
  );
};

export default NoProductsPage;
