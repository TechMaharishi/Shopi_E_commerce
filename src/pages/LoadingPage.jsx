
const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-16 h-16 text-black animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M4 12a8 8 0 1 1 16 0" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
