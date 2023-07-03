import React from "react";
import { Link } from "react-scroll";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-sm md:text-lg mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="btn btn-primary">
        Return Home
      </a>
    </div>
  );
};

export default ErrorPage;
