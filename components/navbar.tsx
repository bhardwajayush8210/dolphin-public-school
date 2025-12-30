"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png" // 👈 your school logo
              alt=""
              width={200}
              height={500}
              className="object-contain"
              priority
            />
            {/* <span className="hidden sm:block font-bold text-lg text-slate-900">
              Dolphin Public School
            </span> */}
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-amber-600"
                        : "text-slate-700 hover:text-amber-600"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-amber-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* ===== DESKTOP CTA ===== */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition shadow-md"
            >
              Enquire Now
            </Link>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm
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
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-2 bg-amber-500 text-white rounded-lg mt-2"
            >
              Enquire Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
