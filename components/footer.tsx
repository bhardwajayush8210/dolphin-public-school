"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* ===== BRAND / LOGO ===== */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 focus:outline-none"
            >
              <Image
                src="/logo2.png"
                alt="Dolphin Public School"
                width={200}
                height={300}
                className="object-contain"
              />
              <span className="font-bold text-lg"></span>
            </button>

            <p className="text-slate-400 text-sm">
              Inspiring minds and shaping futures through quality education.
            </p>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== CONTACT ===== */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +91 9999631657
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                info@dolphinschool.edu.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                Old Faridabad bassa para, Faridabad 121002
              </li>
            </ul>
          </div>

          {/* ===== NEWSLETTER ===== */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get updates on events and announcements
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>© 2025 Dolphin Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
