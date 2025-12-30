"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Gallery", href: "/gallery" },
    { label: "TC Certificate", href: "/tc-certificate" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DPS</span>
            </div>
            <span className="font-bold text-lg text-slate-900 hidden sm:inline">
              Dolphin Public School
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium text-sm transition-colors
                    ${
                      isActive
                        ? "text-amber-600"
                        : "text-slate-700 hover:text-amber-600"
                    }
                  `}
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-amber-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all hover:shadow-lg"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition
                    ${
                      isActive
                        ? "bg-amber-100 text-amber-700 font-semibold"
                        : "text-slate-700 hover:bg-blue-50"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="block px-4 py-2 bg-amber-500 text-white rounded-lg mt-2"
            >
              Enquire Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
