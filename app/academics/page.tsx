import type { Metadata } from "next"
import { BookOpen, Flag as Flask, Laptop, Music } from "lucide-react"

export const metadata: Metadata = {
  title: "Academics - Dolphin Public School",
  description: "Explore our comprehensive CBSE and ICSE curriculum programs at Dolphin Public School",
}

const programs = [
  {
    title: "Primary (Classes I-V)",
    icon: BookOpen,
    description: "Foundational learning focusing on core subjects, languages, and creative development",
    subjects: ["Mathematics", "English", "Hindi", "Science", "Social Studies", "Arts"],
  },
  {
    title: "Middle (Classes VI-VIII)",
    icon: Laptop,
    description: "Enhanced curriculum with introduction to advanced concepts and scientific thinking",
    subjects: ["Mathematics", "Science", "English", "Hindi", "Social Studies", "IT Basics"],
  },
  // {
  //   title: "Secondary (Classes IX-X)",
  //   icon: Flask,
  //   description: "CBSE board preparation with focus on critical thinking and practical application",
  //   subjects: ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Electives"],
  // },
  // {
  //   title: "Senior Secondary (Classes XI-XII)",
  //   icon: Music,
  //   description: "Specialized streams: Science, Commerce, and Humanities with college preparation",
  //   subjects: ["Stream-specific subjects", "Competitive exam prep", "Career counseling"],
  // },
]

export default function AcademicsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Academic <span className="text-blue-600">Programs</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Comprehensive CBSE and ICSE curriculum designed for academic excellence
          </p>
        </div>
      </section> */}

      {/* Programs Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">{program.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Learning Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Student-Centered Learning",
                description:
                  "Focus on individual learning styles and pace, encouraging active participation and engagement",
              },
              {
                title: "Experiential Education",
                description: "Hands-on projects, laboratory work, and field studies complement theoretical knowledge",
              },
              {
                title: "Holistic Development",
                description: "Balanced curriculum integrating academics, sports, arts, and character development",
              },
            ].map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{approach.title}</h3>
                <p className="text-slate-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">State-of-the-Art Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Modern Science Labs",
              "Computer Labs",
              "Library & Media Center",
              "Sports Complex",
              "Smart Classrooms",
              "Auditorium",
              "Cafeteria",
              "Digital Learning Center",
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center border border-blue-200"
              >
                <p className="font-semibold text-slate-900">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
