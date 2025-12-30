"use client"

import type React from "react"

import { useState, type FormEvent } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get your Google Form IDs from the form inspection
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfDl5zBEjhP8ZXvPbqW1zBqPl1jyZZ-9999/formResponse"

    const formParams = new FormData()
    // These field names need to match your Google Form field IDs
    // You should replace these with actual field IDs from your Google Form
    formParams.append("entry.1234567890", formData.name) // Replace with actual field ID for name
    formParams.append("entry.1234567891", formData.email) // Replace with actual field ID for email
    formParams.append("entry.1234567892", formData.phone) // Replace with actual field ID for phone
    formParams.append("entry.1234567893", formData.subject) // Replace with actual field ID for subject
    formParams.append("entry.1234567894", formData.message) // Replace with actual field ID for message

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formParams,
        mode: "no-cors",
      })

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="+91 (123) 456-7890"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Subject *</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select a subject</option>
            <option value="Admissions">Admissions Inquiry</option>
            <option value="Academic">Academic Support</option>
            <option value="Facilities">Facilities Tour</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-6"
        >
          Send Message
        </button>
      </div>

      {/* Google Form Note */}
      <p className="text-xs text-slate-500 mt-4 text-center">
        Note: To connect to Google Forms, replace the form URL and field IDs in the code with your actual Google Form
        details
      </p>
    </form>
  )
}
