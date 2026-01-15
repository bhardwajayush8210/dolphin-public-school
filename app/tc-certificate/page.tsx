import type { Metadata } from "next"
import Link from "next/link"
import TCCertificateForm from "@/components/tc-certificate-form"

export const metadata: Metadata = {
  title: "TC Certificate - Dolphin Public School",
  description: "Request your Transfer Certificate from Dolphin Public School",
}

export default function TCCertificatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-900/10" />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-blue-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 font-medium">TC Certificate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">Transfer Certificate</h1>
          <p className="text-slate-600 text-lg max-w-2xl animate-fade-in-up delay-100">
            Request your Transfer Certificate easily. Fill in your details below and we'll process your request.
           </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 animate-fade-in-up delay-200">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Request TC Certificate</h2>
              <TCCertificateForm />
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            {/* Required Documents */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Required Info
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Admission Number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Student Name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Date of Birth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Last Class Attended</span>
                </li>
              </ul>
            </div>

            {/* Processing Time */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Processing Time
              </h3>
              <p className="text-slate-600 text-sm">
                Your TC Certificate will be processed within 5-7 working days. You'll receive a confirmation email.
              </p>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Delivery Options
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>School Collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Email (Digital Copy)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
