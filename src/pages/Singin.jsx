import React, { useState, useEffect } from 'react';
import { SignIn } from "@clerk/clerk-react";
import LoadingPage from './LoadingPage';

const Signin = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      {loading ? (
        <LoadingPage />
      ) : (
        <SignIn path="/sign-in" signUpUrl="sign-up" />
      )}
    </div>
  );
};

export default Signin;
