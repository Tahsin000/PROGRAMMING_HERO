import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Blogs = () => {
  const {titleChange} = useContext(AuthContext);

  titleChange('Blogs');
    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-6 py-5 text-center text-[#301755]">Blogs</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-[#DB2458]">
          <div className="bg-white rounded-lg shadow-lg p-6 border-[1px] border-[#DB2458] shadow-md">
            <h2 className="text-xl font-bold mb-2">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className="text-gray-700">An access token is a credential that is used to authenticate and authorize API requests. It typically contains information about the user and their permissions. Refresh tokens are used to obtain new access tokens without requiring the user to log in again.</p>
            <p className="text-gray-700">Access tokens are usually stored in client-side storage, such as browser cookies or local storage. Refresh tokens should be stored securely on the server-side.</p>
          </div>
  
          <div className="bg-white rounded-lg shadow-lg p-6 border-[1px] border-[#DB2458] shadow-md">
            <h2 className="text-xl font-bold mb-2">2. Compare SQL and NoSQL databases?</h2>
            <p className="text-gray-700">SQL databases are relational databases that store data in structured tables with predefined schemas. They use structured query language (SQL) for defining and manipulating the data.</p>
            <p className="text-gray-700">NoSQL databases, on the other hand, are non-relational databases that store data in flexible formats like JSON documents or key-value pairs. They provide high scalability, flexibility, and faster performance for certain use cases.</p>
          </div>
  
          <div className="bg-white rounded-lg shadow-lg p-6 border-[1px] border-[#DB2458] shadow-md">
            <h2 className="text-xl font-bold mb-2">3. What is Express.js? What is Nest.js?</h2>
            <p className="text-gray-700">Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible approach to building web servers and APIs. Express.js is known for its simplicity, robustness, and extensive middleware ecosystem.</p>
            <p className="text-gray-700">Nest.js, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It combines elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Reactive Programming.</p>
          </div>
  
          <div className="bg-white rounded-lg shadow-lg p-6  border-[1px] border-[#DB2458] shadow-md">
            <h2 className="text-xl font-bold mb-2">4. What is MongoDB aggregate and how does it work?</h2>
            <p className="text-gray-700">MongoDB aggregate is a powerful feature in MongoDB that allows for advanced data processing and analysis. It provides a way to perform complex data operations, such as filtering, grouping, and aggregating data.</p>
            <p className="text-gray-700">Aggregate operations are performed using a pipeline of stages, where each stage performs a specific data transformation. These stages can include matching, grouping, sorting, and projecting data.</p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;