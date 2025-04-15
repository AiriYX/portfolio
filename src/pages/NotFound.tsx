
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen wheat-gradient-bg flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <h1 className="text-5xl font-serif mb-4 text-navy">404</h1>
        <p className="text-xl text-navy/70 mb-6">Oops! Page not found</p>
        <Link to="/" className="bg-navy hover:bg-navy/80 text-wheat font-sans px-6 py-2 rounded-md transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
