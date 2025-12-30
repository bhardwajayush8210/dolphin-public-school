"use client"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

const facultyMembers = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Principal",
    department: "Administration",
    qualifications: "M.A., M.Ed, PhD",
    image: "/professional-man-principal.jpg",
  },
  {
    name: "Ms. Priya Sharma",
    position: "Head of Science",
    department: "Science",
    qualifications: "M.Sc (Physics), B.Ed",
    image: "/professional-woman-teacher.jpg",
  },
  {
    name: "Mr. Arun Patel",
    position: "Mathematics Teacher",
    department: "Mathematics",
    qualifications: "M.Sc (Math), B.Ed",
    image: "/professional-man-teacher.jpg",
  },
  {
    name: "Ms. Anjali Verma",
    position: "English Department Head",
    department: "Languages",
    qualifications: "M.A (English), B.Ed",
    image: "/professional-woman-english-teacher.jpg",
  },
  {
    name: "Dr. Vikram Singh",
    position: "Head of Academics",
    department: "Curriculum",
    qualifications: "M.Tech, M.A (Education)",
    image: "/professional-man-academic.jpg",
  },
  {
    name: "Ms. Divya Gupta",
    position: "Arts & Culture Coordinator",
    department: "Arts",
    qualifications: "M.F.A, B.Ed",
    image: "/professional-woman-arts.jpg",
  },
]

export default function FacultyClientPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Our <span className="text-blue-600">Faculty Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Experienced educators dedicated to student success and holistic development
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{member.position}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.department}</p>
                  <p className="text-slate-500 text-xs mb-4">Qualifications: {member.qualifications}</p>

                  {/* Contact */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200">
                    <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                      <Mail size={16} />
                      Email
                    </button>
                    <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                      <Phone size={16} />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Department Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { dept: "Science", focus: "Lab-based learning and research" },
              { dept: "Mathematics", focus: "Problem-solving and conceptual clarity" },
              { dept: "Languages", focus: "Communication and literature excellence" },
              { dept: "Social Studies", focus: "Critical thinking and civic awareness" },
            ].map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{dept.dept}</h3>
                <p className="text-slate-600 text-sm">{dept.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
