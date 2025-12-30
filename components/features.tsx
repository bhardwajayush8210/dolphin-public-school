"use client"

import { useState } from "react"
import { BookOpen, Users, Award, Globe } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Lego Robo Lab",
    description: "Build logic and motor skills through hands-on robotics for pre-primary and primary students",
  },
  {
    icon: Award,
    title: "Atal Tinkering Lab",
    description: "Cultivate creativity, design mindset, and computational thinking in young minds",
  },
  {
    icon: Globe,
    title: "LaunchPad",
    description: "Prepare students for competitive exams and careers beyond school at no extra cost",
  },
  {
    icon: Users,
    title: "World-Class Infrastructure",
    description: "Eco-friendly campus with modern facilities, science labs, and smart classrooms",
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Why <span className="text-amber-700">Grand Academy</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive programs designed to develop confident, talented, and accomplished global citizens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="p-6 rounded-xl border border-amber-200 bg-white hover:border-amber-400 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-lg animate-fade-in-up"
                style={{
                  transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-orange-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
