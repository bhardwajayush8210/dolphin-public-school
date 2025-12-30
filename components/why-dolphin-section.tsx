"use client";

import { Building2, Users, Award, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "Spacious classrooms, science labs, computer labs, library, playground, and indoor sports facilities",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Qualified teachers with years of experience in CBSE curriculum and child psychology",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Consistent high scores in academics with 100% result rate in annual exams",
  },
  {
    icon: Leaf,
    title: "Holistic Development",
    description:
      "Focus on values, character building, and overall personality development",
  },
];

export default function WhyDolphinSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Why Choose{" "}
            <span className="text-amber-700">Dolphin Public School</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide the perfect blend of academics, character development,
            and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border-2 border-amber-100 hover:border-amber-400 shadow-md hover:shadow-xl transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-amber-600 group-hover:to-orange-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
