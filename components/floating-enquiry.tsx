"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Phone, X } from "lucide-react"

export default function FloatingEnquiry() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const googleFormURL = "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse"

      const params = new URLSearchParams()
      params.append("entry.YOUR_NAME_FIELD_ID", String(data.name))
      params.append("entry.YOUR_EMAIL_FIELD_ID", String(data.email))
      params.append("entry.YOUR_PHONE_FIELD_ID", String(data.phone))
      params.append("entry.YOUR_MESSAGE_FIELD_ID", String(data.message))

      await fetch(googleFormURL, {
        method: "POST",
        body: params,
        mode: "no-cors",
      })

      setSubmitStatus("success")
      formRef.current?.reset()
      setTimeout(() => {
        setSubmitStatus("idle")
        setIsOpen(false)
      }, 2000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 bottom-6 z-40 animate-pulse-glow"
        aria-label="Open enquiry form"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 duration-300">
          <Phone size={24} />
        </div>
      </button>

      {/* Enquiry Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scale-in">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-white font-bold text-lg">Enquire Now</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} ref={formRef} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your message"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm animate-fade-in-up">
                  Thank you! We'll contact you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm animate-fade-in-up">
                  Error submitting. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition-all font-semibold disabled:opacity-50 hover:shadow-lg transform hover:scale-105 duration-300"
              >
                {isSubmitting ? "Submitting..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
