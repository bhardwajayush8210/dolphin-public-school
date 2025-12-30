"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent - Class 5",
    content:
      "Dolphin Public School has transformed my child's approach to learning. The teachers are highly supportive and the infrastructure is excellent.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Parent - Class 3",
    content:
      "My daughter looks forward to coming to school every day. The balance between academics and activities is perfect.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Parent - Class 4",
    content:
      "Great teacher-to-student ratio and individual attention. The communication with parents is transparent and helpful.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Parent - Class 2",
    content:
      "The curriculum is engaging and the teachers make learning fun. My son has shown significant improvement in all subjects.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Parent <span className="text-amber-700">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from parents whose children have thrived at Dolphin Public
            School
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-amber-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-4 text-sm line-clamp-4">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-amber-100">
                <p className="font-semibold text-slate-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-amber-700 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
