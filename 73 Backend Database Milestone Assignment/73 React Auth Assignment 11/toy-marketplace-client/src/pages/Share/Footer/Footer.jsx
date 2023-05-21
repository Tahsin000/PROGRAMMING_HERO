import React from "react";
import logo from '../../../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-[#301755] py-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">About ToY House Ltd</h3>
          <p className="text-gray-300">Welcome to ToY House Ltd, your one-stop destination for all things toys! We specialize in providing a wide range of high-quality and engaging toys for children of all ages. Our mission is to create delightful experiences and spark joy through play.</p>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            <strong>Phone:</strong> 123-456-7890<br />
            <strong>Email:</strong> info@toyhouse.com<br />
            <strong>Address:</strong> 123 Toy Street, City, State, ZIP
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#1f0f37] mt-6 py-3 text-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} ToY House Ltd. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
