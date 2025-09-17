// Footer component
"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../.../../../../public/assets/Frame 2121457658.png";

export function Footer() {
  return (
    <footer className="bg-gray-100 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Logo, Email Subscription, Socials */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Image src={logo} alt="NXDI Logo" width={100} height={32} />
              </div>

              {/* Email Subscription and Socials */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Email</h4>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Type your e-mail"
                    className="rounded-l-full border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="bg-[#BF1645] text-white rounded-r-full px-6 py-2">
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="subscribe_checkbox" className="mr-2" />
                  <label htmlFor="subscribe_checkbox" className="text-xs text-gray-600">
                    Yes, let me know how to automate my business.
                  </label>
                </div>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
                    <FaFacebookF size={16} className="text-gray-700" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
                    <FaInstagram size={16} className="text-gray-700" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
                    <FaLinkedinIn size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Description and Link Columns */}
          <div className="space-y-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s,
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pages */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Pages</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Home</a></li>
                  <li><a href="#" className="hover:text-blue-600">Services</a></li>
                  <li><a href="#" className="hover:text-blue-600">About</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                </ul>
              </div>
              
              {/* Services */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">We Mine</a></li>
                  <li><a href="#" className="hover:text-blue-600">We Improve</a></li>
                  <li><a href="#" className="hover:text-blue-600">We Automate</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Quick links</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-blue-600">Terms & conditions</a></li>
                  <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#BF1645] text-white py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="font-semibold mb-2 md:mb-0">NXDI</p>
          <p className="mb-2 md:mb-0">2025 © NXDI. All rights reserved.</p>
          <p>Website by NXDI</p>
        </div>
      </div>

      {/* "Go Top" Button */}
      <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" md:flex items-center justify-center px-10 py-5 rounded-full border border-gray-400 bg-white text-gray-700 shadow hover:bg-gray-100 transition-colors absolute bottom-10 right-6"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      <ArrowUp size={18} className="mx-auto mb-1" />
      <span className="text-sm">Go Top</span>
    </button>
    </footer>
  );
}