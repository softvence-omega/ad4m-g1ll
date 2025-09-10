"use client";
import { Menu, X } from "lucide-react";
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
        <div className="flex h-16 items-center justify-between px-6 relative">
          {/* Logo (left) */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="NXDI Logo" width={120} height={40} />
          </Link>

          {/* Nav Links (center - only lg screens) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-bold transition ${
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

          {/* Contact Button (right - lg only) */}
          <div className="hidden lg:block">
            <Link href="/Contacts">
              <HomeButton title="Contact Now" />
            </Link>
          </div>

          {/* Hamburger Button (md and below) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 mx-4 rounded-2xl bg-white/90 backdrop-blur-lg shadow-lg border border-white/20 p-6 space-y-4">
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

            {/* Contact Button (md and below, after menu items) */}
            <Link href="/Contacts" onClick={() => setIsOpen(false)}>
              <HomeButton title="Contact Now" />
            </Link>
          </div>
        )}
      </Wrapper>
    </header>
  );
}
