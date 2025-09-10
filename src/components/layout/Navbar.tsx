"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../../public/assets/Frame 2121457658.png";
import Wrapper from "../resuable/Wrapper";
import HomeButton from "../reusable/HomeButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "About NXDI", href: "/about" },
  { label: "Benefits", href: "/benefits" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-16 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
      <Wrapper>
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="NXDI Logo" width={120} height={40} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={` font-bold transition ${
                    isActive
                      ? "text-blue-600 font-semibold underline underline-offset-4"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button (lg only) */}
          <div className="hidden lg:block">
            <Link
              href="/Contacts"
            >
              <HomeButton title="Contact Now" />
            </Link>
          </div>

          {/* Contact Button (md only → pushed to end) */}
          <div className="hidden md:block lg:hidden ml-auto">
            <HomeButton title="Contact Now">

            </HomeButton>
            <Link
              href="/Contacts"
              className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium shadow-md transition ${
                pathname === "/Contacts"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-300 text-gray-700 bg-white/10"
              }`}
            >
              <span>Contact Now</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 mx-4 rounded-2xl bg-white/90 backdrop-blur-lg shadow-lg border border-white/20 p-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition ${
                    isActive
                      ? "text-blue-600 font-semibold underline underline-offset-4"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Contact Button */}
            <Link
              href="/Contacts"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-center space-x-2 rounded-full px-4 py-2 text-sm font-medium shadow-md transition w-full ${
                pathname === "/Contacts"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>Contact Now</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </Wrapper>
    </header>
  );
}
