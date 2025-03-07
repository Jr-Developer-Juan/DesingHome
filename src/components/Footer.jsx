import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative flex justify-center py-16 text-white bg-center bg-no-repeat bg-cover bg-primary">
      {/* Capa oscura para el fondo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="mb-4 text-4xl font-bold text-primary">YourBrand</h2>
            <p className="mb-4 text-lg text-center text-gray-300 sm:text-left">
              We are a modern company focused on creating innovative digital solutions. Our goal is to provide the best services for our clients, whether you're a first-time buyer or looking for new investments.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaGithub size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 text-2xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/">Real Estate Consulting</a></li>
              <li><a href="/about">Property Management</a></li>
              <li><a href="/services">Luxury Apartments</a></li>
              <li><a href="/contact">Investment Opportunities</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 text-2xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Developed by <span className="text-primary">Jr-Developer Juan Restrepo</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
