"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 -z-10" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-7000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 text-balance leading-tight">
            Excellence in Education, <span className="text-amber-700">Building Futures</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto text-balance animate-slide-in-right">
            Comprehensive curriculum with world-class infrastructure and dedicated faculty nurturing global citizens
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/academics"
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:from-amber-700 hover:to-orange-700 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-amber-600 text-amber-700 rounded-full hover:bg-amber-50 transition-all hover:scale-105 font-semibold"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-20 relative animate-float">
          <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl h-96 md:h-[500px] flex items-center justify-center overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <img
              src="/campus.jpg"
              alt="Students learning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
