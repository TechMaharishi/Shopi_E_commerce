import React, { useState, useEffect } from 'react';
import { SignUp } from "@clerk/clerk-react";
import LoadingPage from './LoadingPage';

const Signup = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      {loading ? (
        <LoadingPage />
      ) : (
        <SignUp path="/sign-up" signInUrl="sign-in" />
      )}
    </div>
  );
};

export default Signup;
