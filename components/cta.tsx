import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Join Our Learning Community?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Take the first step towards academic excellence and personal growth with Stellar Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all hover:scale-105 font-semibold"
            >
              Get Started Today
            </Link>
            {/* <Link
              href="/faculty"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all hover:scale-105 font-semibold"
            >
              Meet Our Team
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
