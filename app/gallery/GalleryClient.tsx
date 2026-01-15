"use client"

import { useState } from "react"

const galleryImages = [
  // { category: "Events", title: "Annual Sports Day 2024", image: "/sports-day-event.jpg" },
  { category: "Academics", title: "Science Fair", image: "/science.jpg" },
  // { category: "Campus", title: "Campus Building", image: "/campus.jpg" },
  { category: "Events", title: "Annual Day", image: "/annual.jpg" },
  { category: "Activities", title: "Art Workshop", image: "/art.jpg" },
  { category: "Academics", title: "Class Activity", image: "/class.jpg" },
  { category: "Campus", title: "Library", image: "/lib.jpg" },
  { category: "Activities", title: "Cultural Program", image: "/cultural.jpg" },
  // { category: "Events", title: "Graduation Day", image: "/graduation-ceremony.jpg" },
]

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = ["All", "Events", "Academics", "Campus", "Activities"]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Photo <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Moments from our vibrant campus life and memorable events
          </p>
        </div>
      </section> */}

      {/* Filter Buttons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 cursor-pointer group"
              >
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                >
                  <p className="text-blue-300 text-sm font-semibold mb-1">{image.category}</p>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to See More?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Follow us on social media for daily updates and behind-the-scenes content from Stellar Academy
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold">
              Follow on Instagram
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-semibold">
              Subscribe to Channel
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
