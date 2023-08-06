import Link from "next/link";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <nav className="flex gap-5 p-3 w-full items-center justify-center">
        <Link
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/about"
        >
          About
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default WithLayout;
