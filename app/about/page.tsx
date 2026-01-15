import type { Metadata } from "next"
import { Users, Lightbulb, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Dolphin Public School",
  description: "Learn about Dolphin Public School's mission, vision, and values",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to achieving the highest standards in education",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Integrating modern teaching methods with traditional values",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive environment for holistic development",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            About <span className="text-blue-600">Dolphin Public School</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            For over two decades, we've been at the forefront of educational excellence in India
          </p>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To nurture young minds with knowledge, skills, and values that enable them to become responsible
                  citizens and global leaders. We believe in fostering critical thinking, creativity, and compassion in
                  every student.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To create an inclusive learning environment where every student can discover their potential, pursue
                  their passions, and prepare for success in an ever-changing world.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl h-96 overflow-hidden">
              <img src="/school-campus-building.jpg" alt="School campus" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Students" },
              { number: "150+", label: "Faculty Members" },
              { number: "95%", label: "Success Rate" },
              { number: "20+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-lg text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
