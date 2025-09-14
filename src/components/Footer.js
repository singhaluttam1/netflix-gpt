import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-4">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">About Us</h2>
          <p className="text-sm leading-6">
            We provide seamless streaming and entertainment with a wide range of movies, series, and more for all your binge-watching needs.
          </p>
        </div>

        {/* Quick Links + Support (side by side on small screens) */}
        <div className="sm:col-span-2 grid grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/browse" className="hover:text-white">Browse</a></li>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Support</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white"><Twitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><Instagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Netflix-GPT | Built with ❤️ by Uttam Singhal
      </div>
    </footer>
  );
};

export default Footer;