"use client";

import { BookOpen, Trophy } from "lucide-react";

export default function CurriculumSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Our <span className="text-amber-700">Curriculum</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Balanced approach combining NCERT guidelines with modern learning
            methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg animate-fade-in-up">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-amber-700 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Academics</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-3">•</span>
                <span>
                  English, Hindi, Mathematics, Science & Social Studies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-3">•</span>
                <span>Computer Science and Digital Literacy from Grade 1</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-3">•</span>
                <span>Regular assessments and parent-teacher interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-3">•</span>
                <span>
                  Focus on conceptual understanding, not rote learning
                </span>
              </li>
            </ul>
          </div>

          <div
            className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-blue-700 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">
                Co-Curricular Activities
              </h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-3">•</span>
                <span>Sports: Cricket, Badminton, Kabaddi, Volleyball</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-3">•</span>
                <span>Arts: Music, Dance, Theatre, Visual Arts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-3">•</span>
                <span>Clubs: Science Club, Coding Club, Art & Craft Club</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-3">•</span>
                <span>
                  Annual events: Sports day, Cultural fest, Science fair
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
