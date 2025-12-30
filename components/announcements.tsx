"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const announcements = [
  {
    title: "Annual Sports Day 2025",
    date: "January 15, 2025",
    category: "Events",
    excerpt:
      "Join us for our most exciting annual sports day featuring inter-house competitions",
  },
  {
    title: "Board Exam Results Released",
    date: "January 10, 2025",
    category: "Academic",
    excerpt: "95% of students scored above 80% in CBSE board examinations",
  },
  {
    title: "New Science Lab Inauguration",
    date: "December 28, 2024",
    category: "Infrastructure",
    excerpt:
      "State-of-the-art laboratory equipped with modern scientific equipment",
  },
];

export default function Announcements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-balance">
              Latest <span className="text-blue-600">Announcements</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
          >
            View All
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in-up shadow-sm"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {announcement.category}
                </span>
                <span className="text-sm text-slate-500">
                  {announcement.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {announcement.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {announcement.excerpt}
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Read More
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
